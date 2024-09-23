import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js";

const prisma = new PrismaClient();

export const mealController = () => {
  
    const getMeals = async (request, response, next) => {
      try {
        const meals = await prisma.meal.findMany({
          select: {
            id: true,
            name: true,
            urlImage: true, // Incluye la imagen si está disponible
          },
        });

        return response.status(HTTP_STATUS.OK).json(meals)
    } catch (error) {
        next(error)
    } finally {
        await prisma.$disconnect();
    }
    // const getMeals = (req, res) => {
    //   res.json(meals); // Envía la lista de comidas como respuesta JSON
    };
  return {
    getMeals,
  };
};
