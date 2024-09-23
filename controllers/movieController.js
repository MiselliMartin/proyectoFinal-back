import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js";

const prisma = new PrismaClient();

export const movieController = () => {
  
    /*async (request, response, next) =>*/
    const getMovies= async (request, response, next) => {
      try {
        const movies = await prisma.movie.findMany({
          select: {
            id: true,
            title: true,
            urlImage: true, // Incluye la imagen si está disponible
          },
        });
        return response.status(HTTP_STATUS.OK).json(movies)
    } catch (error) {
        next(error)
    } finally {
        await prisma.$disconnect();
    }
    // const getMovies = (req, res) => {
    //   res.json(movies); // Envía la lista de comidas como respuesta JSON
    };
  return {
    getMovies,
  };
};
