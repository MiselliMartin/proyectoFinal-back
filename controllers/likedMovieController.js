import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js"

const prisma = new PrismaClient();

export const likedMovieController = () => {
    const markAsLiked = async (request, response, next) => {
        // const { movieId, userId } = request.body //*fetch movie data from api findUnique{id}*/
        // const userId = req.tokenId;    
        const { body } = request
        const userId = Number(body?.userId ?? null)
        const movieId = Number(body?.itemId ?? null)


        try {


            // Now, create the like record
            const likedMovie = await prisma.usersLikedMovies.create({
                data: {
                    userId,
                    movieId // Use the internal ID of the movie
                }
            })
            // console.log(userId)


            return response.status(HTTP_STATUS.CREATED).json(likedMovie)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getLikedMovies = async (request, response, next) => { //*json api */
        const { query } = request
        const userId = Number(query?.id)
        try {
            const likedMovies = await prisma.usersLikedMovies.findMany({
                where: {
                    userId
                },
                select: {
                    movieId: true,
                    userId: true,
                    // movie: {
                    //     select: {
                    //         title: true   //*fetch movie data from api*/
                    //     }
                    // }
                },
                user: {
                    select: {
                        username: true,
                        email: true
                    }
                }
            })
            return response.status(HTTP_STATUS.OK).json(likedMovies)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect();
        }
    }

    const getMostLikedMovies = async (req, res) => {
        const { eventId } = req.params;
        const totalUsers = await prisma.userInEvent.count({ where: { eventId } });
        const halfUsers = Math.ceil(totalUsers / 2)

        try {
            const likedMovies = await prisma.usersLikedMovies.findMany({
                where: {
                    likes: {
                        some: {
                            eventId,
                            _count: { gte: halfUsers / 2 }
                        }
                    }
                },
            });

            res.json(likedMovies);
        } catch (error) {
            next(error)
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