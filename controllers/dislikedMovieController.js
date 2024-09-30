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
            if (error.code === 'P2002') {
                return response.status(HTTP_STATUS.OK).json({ message: "You already disliked this movie." });
              }
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getDislikedMovies = async (request, response, next) => {
        const userId = Number(query?.id)
        const eventId = Number(params?.eventId)
        try {
            const dislikedMovies = await prisma.usersDislikedMovies.findMany({
                where: {
                    eventId,
                },
                select: {
                    movieId: true,
                    userId: true,
                    eventId: true,
                    // movie: {
                    //     select: {
                    //         title: true
                    //     }
                    // }
                },
                // user: {
                //     select: {
                //         username: true,
                //         email: true
                //     }
                // }
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