import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js"

const prisma = new PrismaClient();

export const likedPlaceController = () => {
    const markAsLiked = async (request, response, next) => {
        const { body } = request
        const placeId = Number(body?.itemId ?? null)
        const userId = Number(body?.userId ?? null)
        const eventId = Number(body?.eventId ?? null)

        try {
            const likedPlace = await prisma.usersLikedPlaces.create({
                data: {
                    placeId,
                    userId,
                    eventId
                }
            })

            return response.status(HTTP_STATUS.CREATED).json(likedPlace)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect();
        }
    }

    const getLikedPlaces = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)
        try {
            const likedPlaces = await prisma.usersLikedPlaces.findMany({
                where: {
                    userId
                },
                select: {
                    placeId: true,
                    userId: true,
                    eventId: true,
                    place: {
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
            return response.status(HTTP_STATUS.OK).json(likedPlaces)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect();
        }
    }

    return {
        markAsLiked,
        getLikedPlaces
    }
}