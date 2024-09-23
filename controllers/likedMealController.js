import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js"

const prisma = new PrismaClient();

export const likedMealController = () => {
    const markAsLiked = async (request, response, next) => {
        const { body } = request
        const mealId = Number(body?.itemId ?? null)
        const userId = Number(body?.userId ?? null)

        try {
            const likedMeal = await prisma.usersLikedMeals.create({
                data: {
                    mealId,
                    userId
                }
            })

            return response.status(HTTP_STATUS.CREATED).json(likedMeal)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect();
        }
    }

    const getLikedMeals = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)
        try {
            const likedMeals = await prisma.usersLikedMeals.findMany({
                where: {
                    userId
                },
                select: {
                    mealId: true,
                    userId: true,
                    meal: {
                        select: {
                            name: true
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
            await prisma.$disconnect();
        }
    }

    return {
        markAsLiked,
        getLikedMeals
    }
}