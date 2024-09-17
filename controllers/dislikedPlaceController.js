import { Prisma } from "@prisma/client"
import HTTP_STATUS from "../helpers/httpStatus"

export const dislikedPlaceController = () => {
    const markAsDisliked = async (request, response, next) => {
        const { body } = request
        const placeId = Number(body?.placeId ?? null)
        const userId = Number(body?.userId ?? null)

        try {
            const dislikedPlace = await Prisma.UsersDislikedPlaces.create({
                data: {
                    placeId,
                    userId
                }
            })

            return response.status(HTTP_STATUS.CREATED).json(dislikedPlace)
        } catch (error) {
            next(error)
        } finally {
            await Prisma.$disconnect()
        }
    }

    const getDislikedPlaces = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)
        try {
            const dislikedPlaces = await Prisma.UsersDislikedPlaces.findMany({
                where: {
                    userId
                },
                select: {
                    placeId: true,
                    userId: true,
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
            return response.status(HTTP_STATUS.OK).json(dislikedPlaces)
        } catch (error) {
            next(error)
        } finally {
            await Prisma.$disconnect
        }
    }

    return {
        markAsDisliked,
        getDislikedPlaces
    }
}