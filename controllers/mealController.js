// import { PrismaClient } from "@prisma/client";
// import HTTP_STATUS from "../helpers/httpStatus.js";

// const prisma = new PrismaClient();

export const mealController = () => {
  const meals =
    

    [
      {
        id: 1,
        title: "Asado con ensalada",
        image: "https://www.argentina.com/wp-content/uploads/2020/02/asado.jpg",
      },
      {
        id: 2,
        title: "Empanadas con chimichurri",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/05/empanadas-argentinas.jpg",
      },
      {
        id: 3,
        title: "Milanesa con puré de papas",
        image:
          "https://www.recetas-argentinas.com/wp-content/uploads/2020/01/milanesa-argentinas.jpg",
      },
      {
        id: 4,
        title: "Locro con pan casero",
        image:
          "https://www.loveandlemons.com/wp-content/uploads/2020/04/locro.jpg",
      },
      {
        id: 5,
        title: "Provoleta con ensalada criolla",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/11/8c/68/9e/provoleta.jpg",
      },
      {
        id: 6,
        title: "Bife de chorizo con papas fritas",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/07/34/03/4b/bife-de-chorizo.jpg",
      },
      {
        id: 7,
        title: "Ravioles con salsa de tomate",
        image:
          "https://www.loveandlemons.com/wp-content/uploads/2020/04/ravioles.jpg",
      },
      {
        id: 8,
        title: "Tarta de espinaca con ensalada verde",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/tarta-de-espinaca.jpg",
      },
      {
        id: 9,
        title: "Humita con salsa blanca",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/humita.jpg",
      },
      {
        id: 10,
        title: "Milanesa a la napolitana con ensalada de rúcula",
        image:
          "https://www.loveandlemons.com/wp-content/uploads/2020/04/milanesa-a-la-napolitana.jpg",
      },
      {
        id: 11,
        title: "Pizza con fainá",
        image:
          "https://www.foodandwine.com/thmb/mK-hC6c73A95ZzyA0U8wLeK3r5U=/750x0/filters:no_upscale%2Cquality(90)/argentinian-pizza-b1d06cd7e56f4a1b84971a13881dc7f6.jpg",
      },
      {
        id: 12,
        title: "Tortilla de papas con ensalada mixta",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/07/tortilla-de-papas.jpg",
      },
      {
        id: 13,
        title: "Ceviche con batatas fritas",
        image:
          "https://www.loveandlemons.com/wp-content/uploads/2020/04/ceviche.jpg",
      },
      {
        id: 14,
        title: "Pollo al horno con papas",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pollo-al-horno.jpg",
      },
      {
        id: 15,
        title: "Cazuela con arroz",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/cazuela.jpg",
      },
      {
        id: 16,
        title: "Albondigas con puré de calabaza",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/albondigas.jpg",
      },
      {
        id: 17,
        title: "Pasta con salsa bolognesa y ensalada",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pasta-con-salsa-bolognesa.jpg",
      },
      {
        id: 18,
        title: "Cordero al horno con papas al romero",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/cordero-al-horno.jpg",
      },
      {
        id: 19,
        title: "Rollo de carne con puré de papas",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/rollo-de-carne.jpg",
      },
      {
        id: 20,
        title: "Salmón a la parrilla con vegetales asados",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/salmon-a-la-parrilla.jpg",
      },
      {
        id: 21,
        title: "Tarta de carne con ensalada de zanahoria",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/tarta-de-carne.jpg",
      },
      {
        id: 22,
        title: "Fideos con estofado",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/fideos-con-estofado.jpg",
      },
      {
        id: 23,
        title: "Tortilla de maíz con ensalada",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/tortilla-de-maiz.jpg",
      },
      {
        id: 24,
        title: "Costillas a la parrilla con guarnición de ensalada",
        image:
          "https://media-cdn.tripadvisor.com/media/photo-s/07/34/03/4b/bife-de-chorizo.jpg",
      },
      {
        id: 25,
        title: "Pasta al horno con ensalada verde",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pasta-al-horno.jpg",
      },
      {
        id: 26,
        title: "Pescado al horno con ensalada de rúcula",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pescado-al-horno.jpg",
      },
      {
        id: 27,
        title: "Camarones al ajillo con arroz",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/camarones-al-ajillo.jpg",
      },
      {
        id: 28,
        title: "Sándwich de milanesa con ensalada",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/sandwich-de-milanesa.jpg",
      },
      {
        id: 29,
        title: "Pasta primavera con verduras",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pasta-primavera.jpg",
      },
      {
        id: 30,
        title: "Milanesa de pollo con ensalada de papas",
        image:
          "https://www.loveandlemons.com/wp-content/uploads/2020/04/milanesa-a-la-napolitana.jpg",
      },
      {
        id: 31,
        title: "Ceviche con aguacate",
        image:
          "https://www.loveandlemons.com/wp-content/uploads/2020/04/ceviche.jpg",
      },
      {
        id: 32,
        title: "Pasta al pesto con pollo",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pasta-al-pesto.jpg",
      },
      {
        id: 33,
        title: "Papas rellenas con carne",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/papas-rellenas.jpg",
      },
      {
        id: 34,
        title: "Sándwich de chorizo con ensalada",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/sandwich-de-chorizo.jpg",
      },
      {
        id: 35,
        title: "Sushi variado",
        image:
          "https://www.sushicorner.com/wp-content/uploads/2021/09/sushi.jpg",
      },
      {
        id: 36,
        title: "Pizza de muzzarella",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Pizza_Margarita.jpg/1920px-Pizza_Margarita.jpg",
      },
      {
        id: 37,
        title: "Pasta con salsa de mariscos",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pasta-con-salsa-de-mariscos.jpg",
      },
      {
        id: 38,
        title: "Arroz con pollo",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/arroz-con-pollo.jpg",
      },
      {
        id: 39,
        title: "Calabaza rellena con carne",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/calabaza-rellena.jpg",
      },
      {
        id: 40,
        title: "Ensalada César con pollo",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/ensalada-cesar.jpg",
      },
      {
        id: 41,
        title: "Sopa de verduras con carne",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/sopa-de-verduras.jpg",
      },
      {
        id: 42,
        title: "Goulash con pan",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/goulash.jpg",
      },
      {
        id: 43,
        title: "Puré de papa con carne",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pure-de-papa.jpg",
      },
      {
        id: 44,
        title: "Chili con carne",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/chili-con-carne.jpg",
      },
      {
        id: 45,
        title: "Pimientos rellenos con arroz",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/pimientos-rellenos.jpg",
      },
      {
        id: 46,
        title: "Crepes salados con espinaca",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/crepes-salados.jpg",
      },
      {
        id: 47,
        title: "Tacos de carne con guacamole",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/tacos.jpg",
      },
      {
        id: 48,
        title: "Gnocchi de papa con tuco",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/gnocchi.jpg",
      },
      {
        id: 49,
        title: "Costilla de cerdo con puré",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/costilla-de-cerdo.jpg",
      },
      {
        id: 50,
        title: "Tortellini con salsa de crema",
        image:
          "https://www.cocinadomestica.com/wp-content/uploads/2021/09/tortellini.jpg",
      },
    ];
    /*async (request, response, next) =>*/
    // const { query } = request
    // const userId = Number(query?.id)
    // try {
    //     const likedMeals = await prisma.Meals.findMany({
    //         where: {
    //             userId
    //         },
    //         select: {
    //             mealId: true,
    //             userId: true,
    //             meal: {
    //                 select: {
    //                     name: true
    //                 }
    //             }
    //         },
    //         user: {
    //             select: {
    //                 username: true,
    //                 email: true
    //             }
    //         }
    //     })
    //     return response.status(HTTP_STATUS.OK).json(likedMeals)
    // } catch (error) {
    //     next(error)
    // } finally {
    //     await prisma.$disconnect();
    // }
    const getMeals = (req, res) => {
      res.json(meals); // Envía la lista de comidas como respuesta JSON
    };
  return {
    getMeals,
  };
};
