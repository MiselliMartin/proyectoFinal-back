import { Prisma } from "@prisma/client"
import HTTP_STATUS from "../helpers/httpStatus"

export const likedMealController = () => {
    const markAsLiked = async (request, response, next) => {
        const { body } = request
        const mealId = Number(body?.mealId ?? null)
        const userId = Number(body?.userId ?? null)

        try {
            const likedMeal = await Prisma.UsersLikedMeals.create({
                data: {
                    mealId,
                    userId
                }
            })

            return response.status(HTTP_STATUS.CREATED).json(likedMeal)
        } catch (error) {
            next(error)
        } finally {
            await Prisma.$disconnect()
        }
    }

    const getLikedMeals = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)
        try {
            const likedMeals = await Prisma.UsersLikedMeals.findMany({
                where: {
                    userId
                },
                select: {
                    mealId: true,
                    userId: true,
                    meal: {
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
            return response.status(HTTP_STATUS.OK).json(likedMeals)
        } catch (error) {
            next(error)
        } finally {
            await Prisma.$disconnect
        }
    }

    return {
        markAsLiked,
        getLikedMeals
    }
}