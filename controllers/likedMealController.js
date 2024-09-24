import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js"

const prisma = new PrismaClient();

export const likedMealController = () => {
    const markAsLiked = async (request, response, next) => {
        const { body } = request
        const mealId = Number(body?.itemId ?? null)
        const userId = Number(body?.userId ?? null)
        const eventId = Number(body?.eventId ?? null)

        try {
            const likedMeal = await prisma.usersLikedMeals.create({
                data: {
                    mealId,
                    userId, 
                    eventId
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
        const eventId = Number(params?.eventId)
        try {
            const likedMeals = await prisma.usersLikedMeals.findMany({
                where: {
                    userId,
                    eventId
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
            return response.status(HTTP_STATUS.OK).json(likedMeals)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect();
        }
    }
    const getMostLikedMeals = async (req, res, next) => {
        const { params } = req;
        const eventId = Number(params?.eventId);
    
        try {
            const totalUsers = await prisma.userInEvent.count({ where: { eventId } });
            const halfUsers = Math.ceil(totalUsers / 2);
    
            const likedMeals = await prisma.usersLikedMeals.groupBy({
                by: ['mealId'],
                where: {
                    eventId,
                },
                _count: {
                    userId: true,
                },
                having: {
                    userId: {
                        _count: {
                            gte: halfUsers,
                        },
                    },
                },
                orderBy: {
                    _count: {
                        userId: 'desc', // Ordenamos por el número de likes (de mayor a menor)
                    },
                },
                take: 3, // Limita a los primeros 3 resultados más likeados
            });
            // Aquí obtienes los detalles de cada película
            const mealIds = likedMeals.map(meal => meal.mealId);
            
            const mealDetails = await prisma.meal.findMany({
                where: {
                    id: { in: mealIds },
                },
                select: {
                    id: true,
                    name: true,
                    urlImage: true,
                },
            });
    
            // Combina los resultados de likes con los detalles de las películas
            const formattedResults = likedMeals.map(meal => {
                const mealDetail = mealDetails.find(detail => detail.id === meal.mealId);
                return {
                    mealId: meal.mealId,
                    title: mealDetail?.name || 'Unknown title', // En caso de que no se encuentre el título
                    urlImage: mealDetail?.urlImage || 'Unknown image',
                    likes: meal._count.userId,
                };
            });
    
            res.json(formattedResults);
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    };
    
    

    return {
        markAsLiked,
        getLikedMeals,
        getMostLikedMeals
    }
}