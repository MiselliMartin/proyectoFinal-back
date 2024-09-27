import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js"

const prisma = new PrismaClient();

export const likedMovieController = () => {
    const markAsLiked = async (request, response, next) => {
        // const { movieId, userId } = request.body //*fetch movie data from api findUnique{id}*/
        // const userId = req.tokenId;    
        const { body, params } = request
        const userId = Number(body?.userId ?? null)
        const movieId = Number(body?.itemId ?? null)
        const eventId = Number(params?.eventId)

        try {
            // Now, create the like record
            const likedMovie = await prisma.usersLikedMovies.create({
                data: {
                    userId,
                    movieId, // Use the internal ID of the movie
                    eventId
                }
            })
            // console.log(userId)


            return response.status(HTTP_STATUS.CREATED).json(likedMovie)
        } catch (error) {
            if (error.code === 'P2002') {
                return response.status(HTTP_STATUS.OK).json({ message: "You already liked this movie." });
              }
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getLikedMovies = async (request, response, next) => { //*json api */
        const { query, params } = request
        const userId = Number(query?.id)
        const eventId = Number(params?.eventId)

        try {
            const likedMovies = await prisma.usersLikedMovies.findMany({
                where: {
                    userId,
                    eventId
                },
                select: {
                    movieId: true,
                    userId: true,
                    eventId: true,
                    // movie: {
                    //     select: {
                    //         title: true   //*fetch movie data from api*/
                    //     }
                    // }
                },
                /* user: {
                    select: {
                        username: true,
                        email: true
                    }
                } */
            })
            return response.status(HTTP_STATUS.OK).json(likedMovies)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect();
        }
    }

    const getMostLikedMovies = async (req, res, next) => {
        const { params } = req;
        const eventId = Number(params?.eventId);
    
        try {
            const totalUsers = await prisma.userInEvent.count({ where: { eventId } });
            const halfUsers = Math.ceil(totalUsers / 2);
    
            const likedMovies = await prisma.usersLikedMovies.groupBy({
                by: ['movieId'],
                where: {
                    eventId,
                },
                _count: {
                    userId: true,
                },
                having: {
                    userId: {
                        _count: {
                            gte: halfUsers,
                        },
                    },
                },
                orderBy: {
                    _count: {
                        userId: 'desc', // Ordenamos por el número de likes (de mayor a menor)
                    },
                },
                take: 3, // Limita a los primeros 3 resultados más likeados
            });
            // Aquí obtienes los detalles de cada película
            const movieIds = likedMovies.map(movie => movie.movieId);
            
            const movieDetails = await prisma.movie.findMany({
                where: {
                    id: { in: movieIds },
                },
                select: {
                    id: true,
                    title: true,
                    urlImage: true,
                },
            });
    
            // Combina los resultados de likes con los detalles de las películas
            const formattedResults = likedMovies.map(movie => {
                const movieDetail = movieDetails.find(detail => detail.id === movie.movieId);
                return {
                    movieId: movie.movieId,
                    title: movieDetail?.title || 'Unknown title', // En caso de que no se encuentre el título
                    urlImage: movieDetail?.urlImage || 'Unknown image',
                    likes: movie._count.userId,
                };
            });
    
            res.json(formattedResults);
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    };
    

    return {
        markAsLiked,
        getLikedMovies,
        getMostLikedMovies
    }
}