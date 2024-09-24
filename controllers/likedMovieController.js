import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js"

const prisma = new PrismaClient();

export const likedMovieController = () => {
    const markAsLiked = async (request, response, next) => {
        // const { movieId, userId } = request.body //*fetch movie data from api findUnique{id}*/
        // const userId = req.tokenId;    
        const { body, params } = request
        const userId = Number(body?.userId ?? null)
        const movieId = Number(body?.itemId ?? null)
        const eventId = Number(params?.eventId)

        try {
            // Now, create the like record
            const likedMovie = await prisma.usersLikedMovies.create({
                data: {
                    userId,
                    movieId, // Use the internal ID of the movie
                    eventId
                }
            })
            // console.log(userId)


            return response.status(HTTP_STATUS.CREATED).json(likedMovie)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect()
        }
    }

    const getLikedMovies = async (request, response, next) => { //*json api */
        const { query, params } = request
        const userId = Number(query?.id)
        const eventId = Number(params?.eventId)

        try {
            const likedMovies = await prisma.usersLikedMovies.findMany({
                where: {
                    userId,
                    eventId
                },
                select: {
                    movieId: true,
                    userId: true,
                    eventId: true,
                    // movie: {
                    //     select: {
                    //         title: true   //*fetch movie data from api*/
                    //     }
                    // }
                },
                /* user: {
                    select: {
                        username: true,
                        email: true
                    }
                } */
            })
            return response.status(HTTP_STATUS.OK).json(likedMovies)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect();
        }
    }

    const getMostLikedMovies = async (req, res) => {
        const { eventId } = req.params;
        const totalUsers = await prisma.userInEvent.count({ where: { eventId } });
        const halfUsers = Math.ceil(totalUsers / 2)

        try {
            const likedMovies = await prisma.usersLikedMovies.findMany({
                where: {
                    eventId,
                },
                having: {
                    _count: { gte: halfUsers }
                }
            });

            res.json(likedMovies);
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect();
        }
    };

    return {
        markAsLiked,
        getLikedMovies,
        getMostLikedMovies
    }
}