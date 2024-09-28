// import httpStatus from "../helpers/httpStatus.js";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export const eventController = () => {
//     const createDecision = async (req, res, next) => {
//         const { query } = req
//         const eventId = Number(params?.eventId)
//         const movieId = Number(params?.movieId)
//         const mealId = Number(params?.mealId)
//         const placeId = Number(params?.placeId)
//         try {
//             const newDecision = await prisma.eventDecisions.create({
//                 where:{
//                     eventId,
//                     movieId,
//                     mealId,
//                     placeId,
//                 },
//                 data: {
//                     plannedDate: new Date(plannedDate)

//                 },
//                 include: {
//                     users: true,
//                 },
//                 take: 1,
//             });

//             const responseFormat = {
//                 data: newDecision,
//                 message: "Decision created successfully",
//             };

//             return res.status(httpStatus.CREATED).json(responseFormat);
//         } catch (error) {
//             next(error);
//         } finally {
//             await prisma.$disconnect();
//         }
//     };

//     return {
//         createDecision
//     };

// }

import { PrismaClient } from "@prisma/client";
import httpStatus from "../helpers/httpStatus.js";

const prisma = new PrismaClient();

export const decisionController = () => {
  const getMostLikedMovie = async (eventId) => {
    try {
      const totalUsers = await prisma.userInEvent.count({ where: { eventId } });
      const halfUsers = Math.ceil(totalUsers / 2);

      const likedMovies = await prisma.usersLikedMovies.groupBy({
        by: ["movieId"],
        where: { eventId },
        _count: { userId: true },
        having: { userId: { _count: { gte: halfUsers } } },
        orderBy: { _count: { userId: "desc" } },
        take: 1,
      });

      return likedMovies[0]?.movieId || null;
    } catch (error) {
      console.error("Error in getMostLikedMovie:", error);
      return null;
    }
  };

  const getMostLikedPlace = async (eventId) => {
    try {
      const totalUsers = await prisma.userInEvent.count({ where: { eventId } });
      const halfUsers = Math.ceil(totalUsers / 2);

      const likedPlaces = await prisma.usersLikedPlaces.groupBy({
        by: ["placeId"],
        where: { eventId },
        _count: { userId: true },
        having: { userId: { _count: { gte: halfUsers } } },
        orderBy: { _count: { userId: "desc" } },
        take: 1,
      });

      return likedPlaces[0]?.placeId || null;
    } catch (error) {
      console.error("Error in getMostLikedPlace:", error);
      return null;
    }
  };

  const getMostLikedMeal = async (eventId) => {
    try {
      const totalUsers = await prisma.userInEvent.count({ where: { eventId } });
      const halfUsers = Math.ceil(totalUsers / 2);

      const likedMeals = await prisma.usersLikedMeals.groupBy({
        by: ["mealId"],
        where: { eventId },
        _count: { userId: true },
        having: { userId: { _count: { gte: halfUsers } } },
        orderBy: { _count: { userId: "desc" } },
        take: 1,
      });

      return likedMeals[0]?.mealId || null;
    } catch (error) {
      console.error("Error in getMostLikedMeal:", error);
      return null;
    }
  };

  const createDecision = async (req, res, next) => {
    const { params } = req;
    const eventId = Number(params?.eventId);

    try {
      const movieId = await getMostLikedMovie(eventId);
      const placeId = await getMostLikedPlace(eventId);
      const mealId = await getMostLikedMeal(eventId);

      if (!movieId && !placeId && !mealId) {
        return res.status(httpStatus.NOT_FOUND).json({
          message: "No liked items found for this event",
        });
      }

      const newDecision = await prisma.eventDecisions.create({
        data: {
          eventId,
          movieId,
          placeId,
          mealId,
          // plannedDate: new Date(),
        },
        include: {
          events: true,
          movies: true,
          places: true,
          meals: true,
        },
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

  const getDecision = async (req, res, next) => {
    const { params } = req;
    const eventId = Number(params?.eventId);

    try {
      const decision = await prisma.eventDecisions.findFirst({
        where: { eventId },
        select: {
          movieId: true,
          placeId: true,
          mealId: true,
          movies: {
            select: {
              title: true,
              urlImage: true,
            },
          },
          places: {
            select: {
              title: true,
              urlImage: true,
            },
          },
          meals: {
            select: {
              name: true,
              urlImage: true,
            },
          },
        },
      });

      if (!decision) {
        return res.status(httpStatus.NOT_FOUND).json({
          message: "No decision found for this event",
        });
      }

      const formattedDecision = {
        movie: {
          id: decision.movieId,
          title: decision.movies?.title,
          urlImage: decision.movies?.urlImage,
        },
        place: {
          id: decision.placeId,
          title: decision.places?.title,
          urlImage: decision.places?.urlImage,
        },
        meal: {
          id: decision.mealId,
          title: decision.meals?.name,
          urlImage: decision.meals?.urlImage,
        },
      };

      const responseFormat = {
        data: formattedDecision,
        message: "Decision retrieved successfully",
      };

      return res.status(httpStatus.OK).json(responseFormat);
    } catch (error) {
      next(error);
    } finally {
      await prisma.$disconnect();
    }
  };

  return {
    createDecision,
    getDecision,
  };
};
