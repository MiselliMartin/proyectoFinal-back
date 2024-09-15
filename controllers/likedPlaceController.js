import { Prisma } from "@prisma/client"
import HTTP_STATUS from "../helpers/httpStatus"

export const likedPlaceController = () => {
    const markAsLiked = async (request, response, next) => {
        const { body } = request
        const placeId = Number(body?.placeId ?? null)
        const userId = Number(body?.userId ?? null)

        try {
            const likedPlace = await Prisma.UsersLikedPlaces.create({
                data: {
                    placeId,
                    userId
                }
            })

            return response.status(HTTP_STATUS.CREATED).json(likedPlace)
        } catch (error) {
            next(error)
        } finally {
            await Prisma.$disconnect()
        }
    }

    const getLikedPlaces = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)
        try {
            const likedPlaces = await Prisma.UsersLikedPlaces.findMany({
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
            return response.status(HTTP_STATUS.OK).json(likedPlaces)
        } catch (error) {
            next(error)
        } finally {
            await Prisma.$disconnect
        }
    }

    return {
        markAsLiked,
        getLikedPlaces
    }
}