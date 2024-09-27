import httpStatus from "../helpers/httpStatus.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const eventController = () => {
    const createDecision = async (req, res, next) => {
        const { query } = req
        const eventId = Number(params?.eventId)
        const movieId = Number(params?.movieId)
        const mealId = Number(params?.mealId)
        const placeId = Number(params?.placeId)
        try {
            const newDecision = await prisma.eventDecisions.create({
                where:{
                    eventId,
                    movieId,
                    mealId, 
                    placeId,
                },
                data: {
                    plannedDate: new Date(plannedDate)

                },
                include: {
                    users: true,
                },
                take: 1,
            });

            const responseFormat = {
                data: newDecision,
                message: "Decision created successfully",
            };

            return res.status(httpStatus.CREATED).json(responseFormat);
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    };


    return {
        createDecision
    };

}

