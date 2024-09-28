import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js"

const prisma = new PrismaClient();

export const dislikedPlaceController = () => {
    const markAsDisliked = async (request, response, next) => {
        const { body } = request
        const placeId = Number(body?.itemId ?? null)
        const userId = Number(body?.userId ?? null)
        const eventId = Number(body?.eventId ?? null)

        try {
            const dislikedPlace = await prisma.usersDislikedPlaces.create({
                data: {
                    placeId,
                    userId,
                    eventId
                }
            })

            return response.status(HTTP_STATUS.CREATED).json(dislikedPlace)
        } catch (error) {
            next(error)
            if (error.code === 'P2002') {
                return response.status(HTTP_STATUS.OK).json({ message: "You already disliked this place." });
              }
        } finally {
            await prisma.$disconnect()
        }
    }

    const getDislikedPlaces = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)
        try {
            const dislikedPlaces = await prisma.usersDislikedPlaces.findMany({
                where: {
                    userId
                },
                select: {
                    placeId: true,
                    userId: true,
                    eventId: true,
                    // place: {
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
            return response.status(HTTP_STATUS.OK).json(dislikedPlaces)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect();
        }
    }

    return {
        markAsDisliked,
        getDislikedPlaces
    }
}