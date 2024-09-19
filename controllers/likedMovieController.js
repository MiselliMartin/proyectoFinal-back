import { Prisma } from "@prisma/client"
import HTTP_STATUS from "../helpers/httpStatus"

export const likedMovieController = () => {
    const markAsLiked = async (request, response, next) => {
        const { movieId, movieTitle, movieImage } = request.body
        const userId = req.tokenId;

        try {
            // First, check if the movie exists in our Movies table
            const movie = await Prisma.movie.findUnique({
                where: { id: movieId }
            })

            // If the movie doesn't exist in our database, create it
            if (!movie) {
                movie = await Prisma.movie.create({
                    data: {
                        id: movieId,
                        title: movieTitle,
                    }
                })
            }

            // Now, create the like record
            const likedMovie = await Prisma.usersLikedMovies.create({
                data: {
                    userId,
                    movieId: movie.id // Use the internal ID of the movie
                }
            })


            return response.status(HTTP_STATUS.CREATED).json(likedMovie)
        } catch (error) {
            next(error)
        } finally {
            await Prisma.$disconnect()
        }
    }

    const getLikedMovies = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)
        try {
            const likedMovies = await Prisma.UsersLikedMovies.findMany({
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
            await Prisma.$disconnect
        }
    }

    return {
        markAsLiked,
        getLikedMovies
    }
}