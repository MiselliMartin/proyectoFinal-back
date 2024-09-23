import { PrismaClient } from "@prisma/client"
import HTTP_STATUS from "../helpers/httpStatus.js"

const prisma = new PrismaClient();


export const dislikedMealController = () => {
    const markAsDisliked = async (request, response, next) => {
        const { body } = request
        const mealId = Number(body?.itemId ?? null)
        const userId = Number(body?.userId ?? null)

        try {
            const dislikedMeal = await prisma.usersDislikedMeals.create({
                data: {
                    mealId,
                    userId
                }
            })

            return response.status(HTTP_STATUS.CREATED).json(dislikedMeal)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getDislikedMeals = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)
        try {
            const dislikedMeals = await prisma.usersDislikedMeals.findMany({
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
            return response.status(HTTP_STATUS.OK).json(dislikedMeals)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect();
        }
    }

    return {
        markAsDisliked,
        getDislikedMeals
    }
}