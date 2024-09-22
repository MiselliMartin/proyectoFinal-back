import httpStatus from "../helpers/httpStatus.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const usersInEventController = () => {
    const getUsersInEvent = async (req, res, next) => {
        const { eventId } = req.params;
        try {
            const usersInEvent = await prisma.userInEvent.findUnique({
                where: { id: parseInt(eventId) },
                include: {
                    users: {
                        include: {
                            user: true
                        }
                    }
                }
            });

            if (!usersInEvent) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Event not found" });
            }

            const responseFormat = {
                data: usersInEvent.users.map(ue => ue.user),
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
            const eventsForUser = await prisma.userInEvent.findUnique({
                where: { id: parseInt(userId) },
                include: {
                    events: {
                        include: {
                            event: true
                        }
                    }
                }
            });

            if (!eventsForUser) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
            }

            const responseFormat = {
                data: eventsForUser.events.map(ue => ue.event),
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