// import { PrismaClient } from "@prisma/client";
// import httpStatus from "../helpers/httpStatus.js";

// const prisma = new PrismaClient();

// export const decisionController = () => {
//   const getMostLikedMovie = async (eventId) => {
//     try {
//       const totalUsers = await prisma.userInEvent.count({ where: { eventId } });
//       const halfUsers = Math.ceil(totalUsers / 2);

//       const likedMovies = await prisma.usersLikedMovies.groupBy({
//         by: ["movieId"],
//         where: { eventId },
//         _count: { userId: true },
//         having: { userId: { _count: { gte: halfUsers } } },
//         orderBy: { _count: { userId: "desc" } },
//         take: 1,
//       });

//       return likedMovies[0]?.movieId || null;
//     } catch (error) {
//       console.error("Error in getMostLikedMovie:", error);
//       return null;
//     }
//   };

//   const getMostLikedPlace = async (eventId) => {
//     try {
//       const totalUsers = await prisma.userInEvent.count({ where: { eventId } });
//       const halfUsers = Math.ceil(totalUsers / 2);

//       const likedPlaces = await prisma.usersLikedPlaces.groupBy({
//         by: ["placeId"],
//         where: { eventId },
//         _count: { userId: true },
//         having: { userId: { _count: { gte: halfUsers } } },
//         orderBy: { _count: { userId: "desc" } },
//         take: 1,
//       });

//       return likedPlaces[0]?.placeId || null;
//     } catch (error) {
//       console.error("Error in getMostLikedPlace:", error);
//       return null;
//     }
//   };

//   const getMostLikedMeal = async (eventId) => {
//     try {
//       const totalUsers = await prisma.userInEvent.count({ where: { eventId } });
//       const halfUsers = Math.ceil(totalUsers / 2);

//       const likedMeals = await prisma.usersLikedMeals.groupBy({
//         by: ["mealId"],
//         where: { eventId },
//         _count: { userId: true },
//         having: { userId: { _count: { gte: halfUsers } } },
//         orderBy: { _count: { userId: "desc" } },
//         take: 1,
//       });

//       return likedMeals[0]?.mealId || null;
//     } catch (error) {
//       console.error("Error in getMostLikedMeal:", error);
//       return null;
//     }
//   };

//   const createDecision = async (req, res, next) => {
//     const { params } = req;
//     const eventId = Number(params?.eventId);

//     try {
//       const movieId = await getMostLikedMovie(eventId);
//       const placeId = await getMostLikedPlace(eventId);
//       const mealId = await getMostLikedMeal(eventId);

//       if (!movieId && !placeId && !mealId) {
//         return res.status(httpStatus.NOT_FOUND).json({
//           message: "No liked items found for this event",
//         });
//       }

//       const newDecision = await prisma.eventDecisions.create({
//         data: {
//           eventId,
//           movieId,
//           placeId,
//           mealId,
//           // plannedDate: new Date(),
//         },
//         include: {
//           events: true,
//           movies: true,
//           places: true,
//           meals: true,
//         },
//       });

//       const responseFormat = {
//         data: newDecision,
//         message: "Decision created successfully",
//       };

//       return res.status(httpStatus.CREATED).json(responseFormat);
//     } catch (error) {
//       next(error);
//     } finally {
//       await prisma.$disconnect();
//     }
//   };

//   const getDecision = async (req, res, next) => {
//     const { params } = req;
//     const eventId = Number(params?.eventId);

//     try {
//       const decision = await prisma.eventDecisions.findFirst({
//         where: { eventId },
//         select: {
//           movieId: true,
//           placeId: true,
//           mealId: true,
//           movies: {
//             select: {
//               title: true,
//               urlImage: true,
//             },
//           },
//           places: {
//             select: {
//               title: true,
//               urlImage: true,
//             },
//           },
//           meals: {
//             select: {
//               name: true,
//               urlImage: true,
//             },
//           },
//         },
//       });

//       if (!decision) {
//         return res.status(httpStatus.NOT_FOUND).json({
//           message: "No decision found for this event",
//         });
//       }

//       const formattedDecision = {
//         movie: {
//           id: decision.movieId,
//           title: decision.movies?.title,
//           urlImage: decision.movies?.urlImage,
//         },
//         place: {
//           id: decision.placeId,
//           title: decision.places?.title,
//           urlImage: decision.places?.urlImage,
//         },
//         meal: {
//           id: decision.mealId,
//           title: decision.meals?.name,
//           urlImage: decision.meals?.urlImage,
//         },
//       };

//       const responseFormat = {
//         data: formattedDecision,
//         message: "Decision retrieved successfully",
//       };

//       return res.status(httpStatus.OK).json(responseFormat);
//     } catch (error) {
//       next(error);
//     } finally {
//       await prisma.$disconnect();
//     }
//   };

//   return {
//     createDecision,
//     getDecision,
//   };
// };


import { PrismaClient } from "@prisma/client";
import httpStatus from "../helpers/httpStatus.js";

const prisma = new PrismaClient();

export const decisionController = () => {
  const getTopLikedMovie = async (eventId) => {
    try {
      // const totalUsers = await prisma.userInEvent.count({ where: { eventId } });
      // const halfUsers = Math.ceil(totalUsers / 2);

      const likedMovies = await prisma.usersLikedMovies.groupBy({
        by: ["movieId"],
        where: { eventId },
        _count: { userId: true },
        // having: { userId: { _count: { gte: halfUsers } } },
        orderBy: { _count: { userId: "desc" } },
        take: 3,
      });

      const movieIds = likedMovies.map(movie => movie.movieId);
      const movieDetails = await prisma.movie.findMany({
        where: {
          id: { in: movieIds },
        },
        select: {
          id: true,
          title: true,
          urlImage: true,
        },
      });

      const topMovies = likedMovies.map(movie => {
        const movieDetail = movieDetails.find(detail => detail.id === movie.movieId);
        return {
          movieId: movie.movieId,
          title: movieDetail?.title || 'Unknown title',
          urlImage: movieDetail?.urlImage || 'Unknown image',
          likes: movie._count.userId,
        };
      });

      let resultMovie;
      if (topMovies.length > 0) {
        const maxLikes = topMovies[0].likes;
        const potentialMovies = topMovies.filter(movie => movie.likes === maxLikes);

        // Si solo hay una película con el máximo de likes, esa es la ganadora.
        if (potentialMovies.length === 1) {
          resultMovie = potentialMovies[0];
        } else {
          // Si hay un empate, seleccionar una al azar
          const randomIndex = Math.floor(Math.random() * potentialMovies.length);
          resultMovie = potentialMovies[randomIndex];
        }
      }

      return resultMovie?.movieId || null;
    } catch (error) {
      console.error("Error in getTopLikedMovie:", error);
      return null;
    }
  };

  const getTopLikedPlace = async (eventId) => {
    try {
      // const totalUsers = await prisma.userInEvent.count({ where: { eventId } });
      // const halfUsers = Math.ceil(totalUsers / 2);

      const likedPlaces = await prisma.usersLikedPlaces.groupBy({
        by: ["placeId"],
        where: { eventId },
        _count: { userId: true },
        // having: { userId: { _count: { gte: halfUsers } } },
        orderBy: { _count: { userId: "desc" } },
        take: 3,
      });

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

      const topPlaces = likedPlaces.map(place => {
        const placeDetail = placeDetails.find(detail => detail.id === place.placeId);
        return {
          placeId: place.placeId,
          title: placeDetail?.title || 'Unknown title',
          urlImage: placeDetail?.urlImage || 'Unknown image',
          likes: place._count.userId,
        };
      });

      let resultPlace;
      if (topPlaces.length > 0) {
        const maxLikes = topPlaces[0].likes;
        const potentialPlaces = topPlaces.filter(place => place.likes === maxLikes);

        // Si solo hay un lugar con el máximo de likes, ese es el ganador.
        if (potentialPlaces.length === 1) {
          resultPlace = potentialPlaces[0];
        } else {
          // Si hay un empate, seleccionar uno al azar
          const randomIndex = Math.floor(Math.random() * potentialPlaces.length);
          resultPlace = potentialPlaces[randomIndex];
        }
      }

      return resultPlace?.placeId || null;
    } catch (error) {
      console.error("Error in getTopLikedPlace:", error);
      return null;
    }
  };

  const getTopLikedMeal = async (eventId) => {
    try {
      // const totalUsers = await prisma.userInEvent.count({ where: { eventId } });
      // const halfUsers = Math.ceil(totalUsers / 2);

      const likedMeals = await prisma.usersLikedMeals.groupBy({
        by: ["mealId"],
        where: { eventId },
        _count: { userId: true },
        // having: { userId: { _count: { gte: halfUsers } } },
        orderBy: { _count: { userId: "desc" } },
        take: 3,
      });

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

      const topMeals = likedMeals.map(meal => {
        const mealDetail = mealDetails.find(detail => detail.id === meal.mealId);
        return {
          mealId: meal.mealId,
          title: mealDetail?.name || 'Unknown title',
          urlImage: mealDetail?.urlImage || 'Unknown image',
          likes: meal._count.userId,
        };
      });

      let resultMeal;
      if (topMeals.length > 0) {
        const maxLikes = topMeals[0].likes;
        const potentialMeals = topMeals.filter(meal => meal.likes === maxLikes);

        // Si solo hay una comida con el máximo de likes, esa es la ganadora.
        if (potentialMeals.length === 1) {
          resultMeal = potentialMeals[0];
        } else {
          // Si hay un empate, seleccionar una al azar
          const randomIndex = Math.floor(Math.random() * potentialMeals.length);
          resultMeal = potentialMeals[randomIndex];
        }
      }

      return resultMeal?.mealId || null;
    } catch (error) {
      console.error("Error in getTopLikedMeal:", error);
      return null;
    }
  };

  const createDecision = async (req, res, next) => {
    const { params } = req;
    const eventId = Number(params?.eventId);

    try {
      const movieId = await getTopLikedMovie(eventId);
      const placeId = await getTopLikedPlace(eventId);
      const mealId = await getTopLikedMeal(eventId);

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
      const hasMovieResults = await prisma.usersLikedMovies.findFirst({ where: { eventId } });
      const hasPlaceResults = await prisma.usersLikedPlaces.findFirst({ where: { eventId } });
      const hasMealResults = await prisma.usersLikedMeals.findFirst({ where: { eventId } });

      const hasResults = {
        movies: !!hasMovieResults,
        places: !!hasPlaceResults,
        meals: !!hasMealResults
      };

      if (!decision) {
        return res.status(httpStatus.NOT_FOUND).json({
          message: "No decision found for this event",
          hasResults
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
        hasResults
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

export default decisionController;
