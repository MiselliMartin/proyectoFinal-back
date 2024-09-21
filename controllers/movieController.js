import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js"

const prisma = new PrismaClient();

export const likedMovieController = () => {
    const getMovies = /*async (request, response, next) =>*/ {
        //*JSON deruloO/crud */
        // const { query } = request
        // const userId = Number(query?.id)
        // try {
        //     const likedMovies = await prisma.Movies.findMany({
        //         where: {
        //             userId
        //         },
        //         select: {
        //             movieId: true,
        //             userId: true,
        //             movie: {
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
        //     return response.status(HTTP_STATUS.OK).json(likedMovies)
        // } catch (error) {
        //     next(error)
        // } finally {
        //     await prisma.$disconnect();
        // }
    }

    return {
        getMovies
    }
}