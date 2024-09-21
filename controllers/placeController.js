import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js"

const prisma = new PrismaClient();

export const likedPlaceController = () => {
    const getPlaces = /*async (request, response, next) =>*/ {
        // const { query } = request
        // const userId = Number(query?.id)
        // try {
        //     const likedPlaces = await prisma.Places.findMany({
        //         where: {
        //             userId
        //         },
        //         select: {
        //             placeId: true,
        //             userId: true,
        //             place: {
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
        //     return response.status(HTTP_STATUS.OK).json(likedPlaces)
        // } catch (error) {
        //     next(error)
        // } finally {
        //     await prisma.$disconnect();
        // }
    }

    return {
        getPlaces
    }
}