import httpStatus from "../helpers/httpStatus.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const eventController = () => {
    const createEvent = async (req, res, next) => {
        const { name, password, plannedDate, userId } = req.body;
        try {
            const newEvent = await prisma.event.create({
                data: {
                    name,
                    password,
                    plannedDate: new Date(plannedDate),
                    userId: parseInt(userId),

                },
                include: {
                    users: true,
                },
            });

            const responseFormat = {
                data: newEvent,
                message: "Event created successfully",
            };

            return res.status(httpStatus.CREATED).json(responseFormat);
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    };


    const joinEvent = async (req, res, next) => {
        const { id, password, userId } = req.body;
      
        try {
          // Buscar el evento por ID
          const event = await prisma.event.findUnique({
            where: {
              id: parseInt(id),
            },
            include: {
              users: true,
            },
          });
      
          if (!event) {
            return res.status(404).json({
              message: "Event not found. Please check the event ID.",
            });
          }
      
          // Verificar la contraseña del evento
          if (event.password !== password) {
            return res.status(401).json({
              message: "Incorrect password.",
            });
          }
      
          // Unir al usuario al evento
          await prisma.userInEvent.create({
            data: {
              userId: parseInt(userId),
              eventId: event.id,
            },
          });
      
          const responseFormat = {
            data: event,
            message: "Joined event successfully",
          };
      
          return res.status(200).json(responseFormat);
        } catch (error) {
          next(error);
        } finally {
          await prisma.$disconnect();
        }
      };
      
      
      


    const getEventById = async (req, res, next) => {
        const { id } = req.params;
        try {
            const event = await prisma.event.findUnique({
                where: { id: parseInt(id) },
                include: {
                    users: {
                        include: {
                            user: true,
                        },
                    },
                    roomDecision: true,
                },
            });

            if (!event) {
                return res
                    .status(httpStatus.NOT_FOUND)
                    .json({ message: "Event not found" });
            }

            const responseFormat = {
                data: event,
                message: "Event retrieved successfully",
            };

            return res.status(httpStatus.OK).json(responseFormat);
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    };

    const updateEvent = async (req, res, next) => {
        const { id } = req.params;
        const { name, plannedDate } = req.body;
        try {
            const updatedEvent = await prisma.event.update({
                where: { id: parseInt(id) },
                data: {
                    name,
                    plannedDate: new Date(plannedDate),
                },
                include: {
                    users: true,
                },
            });

            const responseFormat = {
                data: updatedEvent,
                message: "Event updated successfully",
            };

            return res.status(httpStatus.OK).json(responseFormat);
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    };

    const deleteEvent = async (req, res, next) => {
        const { id } = req.params;
        try {
            await prisma.event.delete({
                where: { id: parseInt(id) },
            });

            return res.status(httpStatus.OK).json({ message: "Event deleted successfully" });
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    };

    const listEvents = async (req, res, next) => {
        try {
            const events = await prisma.event.findMany({
                include: {
                    users: {
                        include: {
                            user: true,
                        },
                    },
                    roomDecision: true,
                },
            });

            const responseFormat = {
                data: events,
                message: "Events retrieved successfully",
            };

            return res.status(httpStatus.OK).json(responseFormat);
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    };

    const addUserToEvent = async (req, res, next) => {
        const { eventId, userId } = req.body;
        try {
            const userInEvent = await prisma.userInEvent.create({
                data: {
                    eventId: parseInt(eventId),
                    userId: parseInt(userId),
                },
                include: {
                    event: true,
                    user: true,
                },
            });

            const responseFormat = {
                data: userInEvent,
                message: "User added to event successfully",
            };

            return res.status(httpStatus.CREATED).json(responseFormat);
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    };

    const removeUserFromEvent = async (req, res, next) => {
        const { eventId, userId } = req.params;
        try {
            await prisma.userInEvent.delete({
                where: {
                    userId_eventId: {
                        userId: parseInt(userId),
                        eventId: parseInt(eventId),
                    },
                },
            });

            return res.status(httpStatus.OK).json({ message: "User removed from event successfully" });
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    };

    const getUsersInEvent = async (req, res, next) => {
        const { eventId } = req.params;
        try {
            const usersInEvent = await prisma.userInEvent.findMany({
                where: {
                    eventId: parseInt(eventId),
                },
                include: {
                    user: true,
                },
            });

            const responseFormat = {
                data: usersInEvent,
                message: "Users in event retrieved successfully",
            };

            return res.status(httpStatus.OK).json(responseFormat);
        } catch (error) {
            next(error);
        } finally {
            await prisma.$disconnect();
        }
    };

    return {
        createEvent,
        joinEvent,
        getEventById,
        updateEvent,
        deleteEvent,
        listEvents,
        addUserToEvent,
        removeUserFromEvent,
        getUsersInEvent,
    };
};