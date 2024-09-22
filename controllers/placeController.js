import { PrismaClient } from "@prisma/client";
import HTTP_STATUS from "../helpers/httpStatus.js";

const prisma = new PrismaClient();

export const placeController = () => {
  const places = /*async (request, response, next) =>*/ [
    {
      id: 1,
      title: "Parque Tres de Febrero",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Parque_Tres_de_Febrero.jpg/800px-Parque_Tres_de_Febrero.jpg",
    },
    {
      id: 2,
      title: "Puerto Madero",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Puerto_Madero%2C_Buenos_Aires.jpg/800px-Puerto_Madero%2C_Buenos_Aires.jpg",
    },
    {
      id: 3,
      title: "Caminito",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Caminito_Buenos_Aires.jpg/800px-Caminito_Buenos_Aires.jpg",
    },
    {
      id: 4,
      title: "Plaza de Mayo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Plaza_de_Mayo_2017.jpg/800px-Plaza_de_Mayo_2017.jpg",
    },
    {
      id: 5,
      title: "Recoleta",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Recoleta_Cemetery_2011.jpg/800px-Recoleta_Cemetery_2011.jpg",
    },
    {
      id: 6,
      title: "Jardín Botánico",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jardin_Botanico_2010.jpg/800px-Jardin_Botanico_2010.jpg",
    },
    {
      id: 7,
      title: "Avenida 9 de Julio",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Avenida_9_de_Julio.jpg/800px-Avenida_9_de_Julio.jpg",
    },
    {
      id: 8,
      title: "Palermo Soho",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Palermo_Soho_2016.jpg/800px-Palermo_Soho_2016.jpg",
    },
    {
      id: 9,
      title: "Barrio Chino",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Barrio_Chino_Buenos_Aires.jpg/800px-Barrio_Chino_Buenos_Aires.jpg",
    },
    {
      id: 10,
      title: "Costanera Sur",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Costanera_Sur_Buenos_Aires.jpg/800px-Costanera_Sur_Buenos_Aires.jpg",
    },
    {
      id: 11,
      title: "Teatro Colón",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Teatro_Col%C3%B3n_Buenos_Aires.jpg/800px-Teatro_Col%C3%B3n_Buenos_Aires.jpg",
    },
    {
      id: 12,
      title: "Plaza San Martín",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Plaza_San_Mart%C3%ADn_Buenos_Aires.jpg/800px-Plaza_San_Mart%C3%ADn_Buenos_Aires.jpg",
    },
    {
      id: 13,
      title: "Palacio Barolo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Palacio_Barolo_2011.jpg/800px-Palacio_Barolo_2011.jpg",
    },
    {
      id: 14,
      title: "El Obelisco",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Obelisco_de_Buenos_Aires.jpg/800px-Obelisco_de_Buenos_Aires.jpg",
    },
    {
      id: 15,
      title: "Museo Nacional de Bellas Artes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Museo_Nacional_de_Bellas_Artes.jpg/800px-Museo_Nacional_de_Bellas_Artes.jpg",
    },
    {
      id: 16,
      title: "Plaza Italia",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Plaza_Italia_Buenos_Aires.jpg/800px-Plaza_Italia_Buenos_Aires.jpg",
    },
    {
      id: 17,
      title: "Malba",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Malba_2014.jpg/800px-Malba_2014.jpg",
    },
    {
      id: 18,
      title: "Barrio de San Telmo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/San_Telmo_Buenos_Aires.jpg/800px-San_Telmo_Buenos_Aires.jpg",
    },
    {
      id: 19,
      title: "Catedral Metropolitana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Catedral_Metropolitana_Buenos_Aires.jpg/800px-Catedral_Metropolitana_Buenos_Aires.jpg",
    },
    {
      id: 20,
      title: "Parque de la Memoria",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Parque_de_la_Memoria.jpg/800px-Parque_de_la_Memoria.jpg",
    },
    {
      id: 21,
      title: "Planetario Galileo Galilei",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Planetario_Galileo_Galilei.jpg/800px-Planetario_Galileo_Galilei.jpg",
    },
    {
      id: 22,
      title: "Plaza Serrano",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Plaza_Serrano_Buenos_Aires.jpg/800px-Plaza_Serrano_Buenos_Aires.jpg",
    },
    {
      id: 23,
      title: "Barrio La Boca",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/La_Boca_Buenos_Aires.jpg/800px-La_Boca_Buenos_Aires.jpg",
    },
    {
      id: 24,
      title: "Costanera Norte",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Costanera_Norte_Buenos_Aires.jpg/800px-Costanera_Norte_Buenos_Aires.jpg",
    },
    {
      id: 25,
      title: "Mercado de San Telmo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Mercado_de_San_Telmo.jpg/800px-Mercado_de_San_Telmo.jpg",
    },
    {
      id: 26,
      title: "Museo Evita",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Museo_Evita_Buenos_Aires.jpg/800px-Museo_Evita_Buenos_Aires.jpg",
    },
    {
      id: 27,
      title: "Barrio Palermo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Palermo_Buenos_Aires.jpg/800px-Palermo_Buenos_Aires.jpg",
    },
    {
      id: 28,
      title: "Boca Juniors Stadium",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Boca_Juniors_Stadium.jpg/800px-Boca_Juniors_Stadium.jpg",
    },
    {
      id: 29,
      title: "Parque Centenario",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Parque_Centenario_Buenos_Aires.jpg/800px-Parque_Centenario_Buenos_Aires.jpg",
    },
    {
      id: 30,
      title: "Palacio de Aguas Corrientes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Palacio_de_Aguas_Corrientes.jpg/800px-Palacio_de_Aguas_Corrientes.jpg",
    },
    {
      id: 31,
      title: "Avenida Corrientes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Avenida_Corrientes.jpg/800px-Avenida_Corrientes.jpg",
    },
    {
      id: 32,
      title: "Museo de Arte Moderno",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Museo_de_Arte_Moderno_Buenos_Aires.jpg/800px-Museo_de_Arte_Moderno_Buenos_Aires.jpg",
    },
    {
      id: 33,
      title: "El Rosedal",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/El_Rosedal_Buenos_Aires.jpg/800px-El_Rosedal_Buenos_Aires.jpg",
    },
    {
      id: 34,
      title: "Plaza de los Dos Congresos",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Plaza_de_los_Dos_Congresos.jpg/800px-Plaza_de_los_Dos_Congresos.jpg",
    },
    {
      id: 35,
      title: "Templo Libertad",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Templo_Libertad_Buenos_Aires.jpg/800px-Templo_Libertad_Buenos_Aires.jpg",
    },
    {
      id: 36,
      title: "Cerro de la Gloria",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cerro_de_la_Gloria_Buenos_Aires.jpg/800px-Cerro_de_la_Gloria_Buenos_Aires.jpg",
    },
    {
      id: 37,
      title: "El Tigre",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/El_Tigre_Buenos_Aires.jpg/800px-El_Tigre_Buenos_Aires.jpg",
    },
    {
      id: 38,
      title: "Parque Lezama",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Parque_Lezama_Buenos_Aires.jpg/800px-Parque_Lezama_Buenos_Aires.jpg",
    },
    {
      id: 39,
      title: "Feria de Mataderos",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Feria_de_Mataderos.jpg/800px-Feria_de_Mataderos.jpg",
    },
    {
      id: 40,
      title: "Barrio Villa Devoto",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Villa_Devoto_Buenos_Aires.jpg/800px-Villa_Devoto_Buenos_Aires.jpg",
    },
    {
      id: 41,
      title: "Centro Cultural Recoleta",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Centro_Cultural_Recoleta_Buenos_Aires.jpg/800px-Centro_Cultural_Recoleta_Buenos_Aires.jpg",
    },
    {
      id: 42,
      title: "Plaza de la República",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Plaza_de_la_Rep%C3%BAblica_Buenos_Aires.jpg/800px-Plaza_de_la_Rep%C3%BAblica_Buenos_Aires.jpg",
    },
    {
      id: 43,
      title: "Plaza de Mayo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Plaza_de_Mayo_2017.jpg/800px-Plaza_de_Mayo_2017.jpg",
    },
    {
      id: 44,
      title: "Museo Nacional de Bellas Artes",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Museo_Nacional_de_Bellas_Artes.jpg/800px-Museo_Nacional_de_Bellas_Artes.jpg",
    },
    {
      id: 45,
      title: "Plaza de la República",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Plaza_de_la_Rep%C3%BAblica_Buenos_Aires.jpg/800px-Plaza_de_la_Rep%C3%BAblica_Buenos_Aires.jpg",
    },
    {
      id: 46,
      title: "Jardín Japonés",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Jardin_Japones_Buenos_Aires.jpg/800px-Jardin_Japones_Buenos_Aires.jpg",
    },
    {
      id: 47,
      title: "Barrio Belgrano",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Belgrano_Buenos_Aires.jpg/800px-Belgrano_Buenos_Aires.jpg",
    },
    {
      id: 48,
      title: "Centro Cultural Kirchner",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Centro_Cultural_Kirchner_Buenos_Aires.jpg/800px-Centro_Cultural_Kirchner_Buenos_Aires.jpg",
    },
    {
      id: 49,
      title: "Barrio de Caballito",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Caballito_Buenos_Aires.jpg/800px-Caballito_Buenos_Aires.jpg",
    },
    {
      id: 50,
      title: "Plaza Vicente López",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Plaza_Vicente_L%C3%B3pez_Buenos_Aires.jpg/800px-Plaza_Vicente_L%C3%B3pez_Buenos_Aires.jpg",
    },
  ];

  const getPlaces = (req, res) => {
    res.json(places); // Envía la lista de comidas como respuesta JSON
  };

  // const { query } = request
  // const userId = Number(query?.id)
  // try {
  //     const likedPlaces = await prisma.Places.findMany({
  //         where: {
  //             userId
  //         },
  //         select: {
  //             placeId: true,
  //             userId: true,
  //             place: {
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
  //     return response.status(HTTP_STATUS.OK).json(likedPlaces)
  // } catch (error) {
  //     next(error)
  // } finally {
  //     await prisma.$disconnect();
  // }

  return {
    getPlaces,
  };
};
