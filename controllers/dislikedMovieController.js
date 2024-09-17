import { Prisma } from "@prisma/client"
import HTTP_STATUS from "../helpers/httpStatus"

export const dislikedMovieController = () => {
    const markAsDisliked = async (request, response, next) => {
        const { body } = request
        const movieId = Number(body?.movieId ?? null)
        const userId = Number(body?.userId ?? null)

        try {
            const dislikedMovie = await Prisma.UsersDislikedMovies.create({
                data: {
                    movieId,
                    userId
                }
            })

            return response.status(HTTP_STATUS.CREATED).json(dislikedMovie)
        } catch (error) {
            next(error)
        } finally {
            await Prisma.$disconnect()
        }
    }

    const getDislikedMovies = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)
        try {
            const dislikedMovies = await Prisma.UsersDislikedMovies.findMany({
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
            return response.status(HTTP_STATUS.OK).json(dislikedMovies)
        } catch (error) {
            next(error)
        } finally {
            await Prisma.$disconnect
        }
    }

    return {
        markAsDisliked,
        getDislikedMovies
    }
}