import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js";

const prisma = new PrismaClient();

export const placeController = () => {
  
    const getPlaces= async (request, response, next) => {
      try {
        const places = await prisma.place.findMany({
          select: {
            id: true,
            title: true,
            urlImage: true, // Incluye la imagen si está disponible
          },
        });

        return response.status(HTTP_STATUS.OK).json(places)
    } catch (error) {
        next(error)
    } finally {
        await prisma.$disconnect();
    }
    // const getPlaces = (req, res) => {
    //   res.json(places); // Envía la lista de comidas como respuesta JSON
    };
  return {
    getPlaces,
  };
};
