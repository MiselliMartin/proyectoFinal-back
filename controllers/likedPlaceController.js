import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js"

const prisma = new PrismaClient();

export const likedPlaceController = () => {
    const markAsLiked = async (request, response, next) => {
        const { body } = request
        const placeId = Number(body?.itemId ?? null)
        const userId = Number(body?.userId ?? null)
        const eventId = Number(body?.eventId ?? null)

        try {
            const likedPlace = await prisma.usersLikedPlaces.create({
                data: {
                    placeId,
                    userId,
                    eventId
                }
            })

            return response.status(HTTP_STATUS.CREATED).json(likedPlace)
        } catch (error) {
            if (error.code === 'P2002') {
                return response.status(HTTP_STATUS.OK).json({ message: "You already liked this movie." });
              }
            next(error)
        } finally {
            await prisma.$disconnect();
        }
    }

    const getLikedPlaces = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)
        const eventId = Number(params?.eventId)
        try {
            const likedPlaces = await prisma.usersLikedPlaces.findMany({
                where: {
                    userId,
                    eventId
                },
                select: {
                    placeId: true,
                    userId: true,
                    eventId: true,
                    // place: {
                    //     select: {
                    //         title: true
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
            return response.status(HTTP_STATUS.OK).json(likedPlaces)
        } catch (error) {
            next(error)
        } finally {
            await prisma.$disconnect();
        }
    }

    const getMostLikedPlaces = async (req, res, next) => {
        const { params } = req;
        const eventId = Number(params?.eventId);
    
        try {
    
            const likedPlaces = await prisma.usersLikedPlaces.groupBy({
                by: ['placeId'],
                where: {
                    eventId,
                },
                _count: {
                    userId: true,
                },
                orderBy: {
                    _count: {
                        userId: 'desc', // Ordenamos por el número de likes (de mayor a menor)
                    },
                },
                take: 3, // Limita a los primeros 3 resultados más likeados
            });
            // Aquí obtienes los detalles de cada película
            const placeIds = likedPlaces.map(place => place.placeId);
            
            const placeDetails = await prisma.place.findMany({
                where: {
                    id: { in: placeIds },
                },
                select: {
                    id: true,
                    title: true,
                    urlImage: true,
                },
            });
    
            // Combina los resultados de likes con los detalles de las películas
            const formattedResults = likedPlaces.map(place => {
                const placeDetail = placeDetails.find(detail => detail.id === place.placeId);
                return {
                    placeId: place.placeId,
                    title: placeDetail?.title || 'Unknown title', // En caso de que no se encuentre el título
                    urlImage: placeDetail?.urlImage || 'Unknown image',
                    likes: place._count.userId,
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
        getLikedPlaces,
        getMostLikedPlaces
    }
}