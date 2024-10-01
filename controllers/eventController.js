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
            if (error.code === 'P2002') {
                return res.status(409).json({ message: 'Ya estás unido a este evento.' });
            }
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
                    // roomDecision: true,
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

    // const deleteEvent = async (req, res, next) => {
    //     const { id } = req.params;
    //     try {
    //         await prisma.event.delete({
    //             where: { id: parseInt(id) },
    //         });

    //         return res.status(httpStatus.OK).json({ message: "Event deleted successfully" });
    //     } catch (error) {
    //         next(error);
    //     } finally {
    //         await prisma.$disconnect();
    //     }
    // };


    const deleteEvent = async (req, res, next) => {
        const { id } = req.params;
        // const userId = req.user.id; // Assuming you have user information in the request
    
        try {
            await prisma.$transaction(async (prisma) => {
                // Check if the user is the creator of the event
                const event = await prisma.event.findUnique({
                    where: { id: parseInt(id) },
                    // select: { userId: true }
                });
    
                if (!event) {
                    return res.status(httpStatus.NOT_FOUND).json({ message: "Event not found" });
                }

    
                // Delete all related records in users_in_event
                await prisma.userInEvent.deleteMany({
                    where: { eventId: parseInt(id) }
                });
    
                // Delete all related records in other tables
                await prisma.usersDislikedMeals.deleteMany({ where: { eventId: parseInt(id) } });
                await prisma.usersDislikedMovies.deleteMany({ where: { eventId: parseInt(id) } });
                await prisma.usersDislikedPlaces.deleteMany({ where: { eventId: parseInt(id) } });
                await prisma.usersLikedMeals.deleteMany({ where: { eventId: parseInt(id) } });
                await prisma.usersLikedMovies.deleteMany({ where: { eventId: parseInt(id) } });
                await prisma.usersLikedPlaces.deleteMany({ where: { eventId: parseInt(id) } });
                await prisma.eventDecisions.deleteMany({ where: { eventId: parseInt(id) } });
    
                // await prisma.user.updateMany({
                //     where: { events: { has: parseInt(id) } }, // Solo actualizar usuarios que tienen este evento en su array
                //     data: {
                //         events: {
                //             set: {
                //                 // Remover el ID del evento que se está eliminando
                //                 // Esto asume que el campo 'events' es un array de IDs de eventos
                //                 events: {
                //                     // Prisma no soporta directamente eliminar elementos de un array
                //                     // por lo que se debe realizar de forma manual en la lógica.
                //                     set: prisma.raw(`ARRAY(SELECT unnest(events) WHERE unnest(events) != ${parseInt(id)})`)
                //                 }
                //             }
                //         },
                //     },
                // });
                
                // Finally, delete the event
                await prisma.event.delete({
                    where: { id: parseInt(id) },
                });
            });
    
            return res.status(httpStatus.OK).json({ message: "Event and related records deleted successfully" });
        } catch (error) {
            if (error.code === 'P2025') {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Event not found" });
            } else if (error.code === 'P2003') {
                return res.status(httpStatus.CONFLICT).json({ message: "Cannot delete event due to existing references" });
            } else {
                console.error("Error deleting event:", error);
                return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "An error occurred while deleting the event" });
            }
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
                    event: {
                        include: {
                            user: true,
                        },
                    },
                }
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
    const getEventsFromUser = async (req, res, next) => {
        const { userId } = req.params;
        try {
            const eventsFromUser = await prisma.userInEvent.findMany({
                where: {
                    userId: parseInt(userId),
                },
                include: {
                    event: true,
                },
            });

            const responseFormat = {
                data: eventsFromUser,
                message: "Events from user retrieved successfully",
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
        getEventsFromUser
    };
};