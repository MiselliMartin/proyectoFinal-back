import httpStatus from "../helpers/httpStatus.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const usersInEventController = () => {
    const getUsersInEvent = async (req, res, next) => {
        const { eventId } = req.params;
        try {
            // Buscar todos los usuarios que están en el evento
            const usersInEvent = await prisma.userInEvent.findMany({
                where: { eventId: parseInt(eventId) },
                include: {
                    user: true,  // Incluir la relación con la tabla 'User'
                },
            });

            if (!usersInEvent || usersInEvent.length === 0) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Event not found or no users in event" });
            }

            const responseFormat = {
                data: usersInEvent.map(ue => ue.user),  // Mapear solo los usuarios
                message: "Users in event retrieved successfully",
            };

            return res.status(httpStatus.OK).json(responseFormat);
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    };

    const getEventsForUser = async (req, res, next) => {
        const { userId } = req.params;
        try {
            // Buscar todos los eventos en los que está el usuario
            const eventsForUser = await prisma.userInEvent.findMany({
                where: { userId: parseInt(userId) },
                include: {
                    event: true,  // Incluir la relación con la tabla 'Event'
                },
            });

            if (!eventsForUser || eventsForUser.length === 0) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "User not found or no events for user" });
            }

            const responseFormat = {
                data: eventsForUser.map(ue => ue.event),  // Mapear solo los eventos
                message: "Events for user retrieved successfully",
            };

            return res.status(httpStatus.OK).json(responseFormat);
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    };

    return {
        getUsersInEvent,
        getEventsForUser,
    };
};
