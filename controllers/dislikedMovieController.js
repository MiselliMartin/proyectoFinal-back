import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js"

const prisma = new PrismaClient();

export const dislikedMovieController = () => {
    const markAsDisliked = async (request, response, next) => {
        const { body } = request
        const movieId = Number(body?.itemId ?? null)
        const userId = Number(body?.userId ?? null)
        const eventId = Number(body?.eventId ?? null)

        try {
            const dislikedMovie = await prisma.usersDislikedMovies.create({
                data: {
                    movieId,
                    userId,
                    eventId
                }
            })

            return response.status(HTTP_STATUS.CREATED).json(dislikedMovie)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getDislikedMovies = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)
        try {
            const dislikedMovies = await prisma.usersDislikedMovies.findMany({
                where: {
                    userId
                },
                select: {
                    movieId: true,
                    userId: true,
                    eventId: true,
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
            await prisma.$disconnect();
        }
    }

    return {
        markAsDisliked,
        getDislikedMovies
    }
}