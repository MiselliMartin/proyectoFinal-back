import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js"

const prisma = new PrismaClient();

export const likedMealController = () => {
    const getMeals = /*async (request, response, next) =>*/ {
        // const { query } = request
        // const userId = Number(query?.id)
        // try {
        //     const likedMeals = await prisma.Meals.findMany({
        //         where: {
        //             userId
        //         },
        //         select: {
        //             mealId: true,
        //             userId: true,
        //             meal: {
        //                 select: {
        //                     name: true
        //                 }
        //             }
        //         },
        //         user: {
        //             select: {
        //                 username: true,
        //                 email: true
        //             }
        //         }
        //     })
        //     return response.status(HTTP_STATUS.OK).json(likedMeals)
        // } catch (error) {
        //     next(error)
        // } finally {
        //     await prisma.$disconnect();
        // }
    }

    return {
        getMeals
    }
}