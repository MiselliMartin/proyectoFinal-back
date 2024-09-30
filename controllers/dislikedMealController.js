import { PrismaClient } from "@prisma/client"
import HTTP_STATUS from "../helpers/httpStatus.js"

const prisma = new PrismaClient();


export const dislikedMealController = () => {
    const markAsDisliked = async (request, response, next) => {
        const { body } = request
        const mealId = Number(body?.itemId ?? null)
        const userId = Number(body?.userId ?? null)
        const eventId = Number(body?.eventId ?? null)

        try {
            const dislikedMeal = await prisma.usersDislikedMeals.create({
                data: {
                    mealId,
                    userId,
                    eventId
                }
            })

            return response.status(HTTP_STATUS.CREATED).json(dislikedMeal)
        } catch (error) {          
            if (error.code === 'P2002') {
            return response.status(HTTP_STATUS.OK).json({ message: "You already disliked this meal." });
          }
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getDislikedMeals = async (request, response, next) => {
        const { query, params } = request
        const eventId = Number(params?.eventId)
        try {
            const dislikedMeals = await prisma.usersDislikedMeals.findMany({
                where: {
                    eventId,
                },
                select: {
                    mealId: true,
                    userId: true,
                    eventId: true,
                    // meal: {
                    //     select: {
                    //         name: true
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