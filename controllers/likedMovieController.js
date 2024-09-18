import { Prisma } from "@prisma/client"
import HTTP_STATUS from "../helpers/httpStatus"

export const likedMovieController = () => {
    const markAsLiked = async (request, response, next) => {
        const { body } = request
        const movieId = Number(body?.movieId ?? null)
        const userId = req.tokenId;

        try {
            const likedMovie = await Prisma.UsersLikedMovies.create({
                data: {
                    movieId,
                    userId
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
                    movie: {
                        select: {
                            title: true
                        }
                    }
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