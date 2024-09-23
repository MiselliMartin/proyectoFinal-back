import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const places = [
    {
      title: "Parque Tres de Febrero",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Parque_Tres_de_Febrero.jpg/800px-Parque_Tres_de_Febrero.jpg",
    },
    {
      title: "Puerto Madero",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Puerto_Madero%2C_Buenos_Aires.jpg/800px-Puerto_Madero%2C_Buenos_Aires.jpg",
    },
    {
      title: "Caminito",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Caminito_Buenos_Aires.jpg/800px-Caminito_Buenos_Aires.jpg",
    },
    {
      title: "Plaza de Mayo",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Plaza_de_Mayo_2017.jpg/800px-Plaza_de_Mayo_2017.jpg",
    },
    {
      title: "Recoleta",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Recoleta_Cemetery_2011.jpg/800px-Recoleta_Cemetery_2011.jpg",
    },
    {
      title: "Jardín Botánico",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jardin_Botanico_2010.jpg/800px-Jardin_Botanico_2010.jpg",
    },
    {
      title: "Avenida 9 de Julio",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Avenida_9_de_Julio.jpg/800px-Avenida_9_de_Julio.jpg",
    },
    {
      title: "Palermo Soho",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Palermo_Soho_2016.jpg/800px-Palermo_Soho_2016.jpg",
    },
    {
      title: "Barrio Chino",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Barrio_Chino_Buenos_Aires.jpg/800px-Barrio_Chino_Buenos_Aires.jpg",
    },
    {
      title: "Costanera Sur",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Costanera_Sur_Buenos_Aires.jpg/800px-Costanera_Sur_Buenos_Aires.jpg",
    },
    {
      title: "Teatro Colón",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Teatro_Col%C3%B3n_Buenos_Aires.jpg/800px-Teatro_Col%C3%B3n_Buenos_Aires.jpg",
    },
    {
      title: "Plaza San Martín",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Plaza_San_Mart%C3%ADn_Buenos_Aires.jpg/800px-Plaza_San_Mart%C3%ADn_Buenos_Aires.jpg",
    },
    {
      title: "Palacio Barolo",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Palacio_Barolo_2011.jpg/800px-Palacio_Barolo_2011.jpg",
    },
    {
      title: "El Obelisco",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Obelisco_de_Buenos_Aires.jpg/800px-Obelisco_de_Buenos_Aires.jpg",
    },
    {
      title: "Museo Nacional de Bellas Artes",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Museo_Nacional_de_Bellas_Artes.jpg/800px-Museo_Nacional_de_Bellas_Artes.jpg",
    },
    {
      title: "Plaza Italia",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Plaza_Italia_Buenos_Aires.jpg/800px-Plaza_Italia_Buenos_Aires.jpg",
    },
    {
      title: "Malba",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Malba_2014.jpg/800px-Malba_2014.jpg",
    },
    {
      title: "Barrio de San Telmo",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/San_Telmo_Buenos_Aires.jpg/800px-San_Telmo_Buenos_Aires.jpg",
    },
    {
      title: "Catedral Metropolitana",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Catedral_Metropolitana_Buenos_Aires.jpg/800px-Catedral_Metropolitana_Buenos_Aires.jpg",
    },
    {
      title: "Parque de la Memoria",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Parque_de_la_Memoria.jpg/800px-Parque_de_la_Memoria.jpg",
    },
    {
      title: "Planetario Galileo Galilei",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Planetario_Galileo_Galilei.jpg/800px-Planetario_Galileo_Galilei.jpg",
    },
    {
      title: "Plaza Serrano",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Plaza_Serrano_Buenos_Aires.jpg/800px-Plaza_Serrano_Buenos_Aires.jpg",
    },
    {
      title: "Barrio La Boca",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/La_Boca_Buenos_Aires.jpg/800px-La_Boca_Buenos_Aires.jpg",
    },
    {
      title: "Costanera Norte",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Costanera_Norte_Buenos_Aires.jpg/800px-Costanera_Norte_Buenos_Aires.jpg",
    },
    {
      title: "Mercado de San Telmo",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Mercado_de_San_Telmo.jpg/800px-Mercado_de_San_Telmo.jpg",
    },
    {
      title: "Museo Evita",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Museo_Evita_Buenos_Aires.jpg/800px-Museo_Evita_Buenos_Aires.jpg",
    },
    {
      title: "Barrio Palermo",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Palermo_Buenos_Aires.jpg/800px-Palermo_Buenos_Aires.jpg",
    },
    {
      title: "Boca Juniors Stadium",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Boca_Juniors_Stadium.jpg/800px-Boca_Juniors_Stadium.jpg",
    },
    {
      title: "Parque Centenario",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Parque_Centenario_Buenos_Aires.jpg/800px-Parque_Centenario_Buenos_Aires.jpg",
    },
    {
      title: "Palacio de Aguas Corrientes",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Palacio_de_Aguas_Corrientes.jpg/800px-Palacio_de_Aguas_Corrientes.jpg",
    },
    {
      title: "Avenida Corrientes",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Avenida_Corrientes.jpg/800px-Avenida_Corrientes.jpg",
    },
    {
      title: "Museo de Arte Moderno",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Museo_de_Arte_Moderno_Buenos_Aires.jpg/800px-Museo_de_Arte_Moderno_Buenos_Aires.jpg",
    },
    {
      title: "El Rosedal",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/El_Rosedal_Buenos_Aires.jpg/800px-El_Rosedal_Buenos_Aires.jpg",
    },
    {
      title: "Plaza de los Dos Congresos",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Plaza_de_los_Dos_Congresos.jpg/800px-Plaza_de_los_Dos_Congresos.jpg",
    },
    {
      title: "Templo Libertad",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Templo_Libertad_Buenos_Aires.jpg/800px-Templo_Libertad_Buenos_Aires.jpg",
    },
    {
      title: "Cerro de la Gloria",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cerro_de_la_Gloria_Buenos_Aires.jpg/800px-Cerro_de_la_Gloria_Buenos_Aires.jpg",
    },
    {
      title: "El Tigre",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/El_Tigre_Buenos_Aires.jpg/800px-El_Tigre_Buenos_Aires.jpg",
    },
    {
      title: "Parque Lezama",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Parque_Lezama_Buenos_Aires.jpg/800px-Parque_Lezama_Buenos_Aires.jpg",
    },
    {
      title: "Feria de Mataderos",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Feria_de_Mataderos.jpg/800px-Feria_de_Mataderos.jpg",
    },
    {
      title: "Barrio Villa Devoto",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Villa_Devoto_Buenos_Aires.jpg/800px-Villa_Devoto_Buenos_Aires.jpg",
    },
    {
      title: "Centro Cultural Recoleta",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Centro_Cultural_Recoleta_Buenos_Aires.jpg/800px-Centro_Cultural_Recoleta_Buenos_Aires.jpg",
    },
    {
      title: "Plaza de la República",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Plaza_de_la_Rep%C3%BAblica_Buenos_Aires.jpg/800px-Plaza_de_la_Rep%C3%BAblica_Buenos_Aires.jpg",
    },
    {
      title: "Plaza de Mayo",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Plaza_de_Mayo_2017.jpg/800px-Plaza_de_Mayo_2017.jpg",
    },
    {
      title: "Museo Nacional de Bellas Artes",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Museo_Nacional_de_Bellas_Artes.jpg/800px-Museo_Nacional_de_Bellas_Artes.jpg",
    },
    {
      title: "Plaza de la República",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Plaza_de_la_Rep%C3%BAblica_Buenos_Aires.jpg/800px-Plaza_de_la_Rep%C3%BAblica_Buenos_Aires.jpg",
    },
    {
      title: "Jardín Japonés",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Jardin_Japones_Buenos_Aires.jpg/800px-Jardin_Japones_Buenos_Aires.jpg",
    },
    {
      title: "Barrio Belgrano",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Belgrano_Buenos_Aires.jpg/800px-Belgrano_Buenos_Aires.jpg",
    },
    {
      title: "Centro Cultural Kirchner",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Centro_Cultural_Kirchner_Buenos_Aires.jpg/800px-Centro_Cultural_Kirchner_Buenos_Aires.jpg",
    },
    {
      title: "Barrio de Caballito",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Caballito_Buenos_Aires.jpg/800px-Caballito_Buenos_Aires.jpg",
    },
    {
      title: "Plaza Vicente López",
      urlImage:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Plaza_Vicente_L%C3%B3pez_Buenos_Aires.jpg/800px-Plaza_Vicente_L%C3%B3pez_Buenos_Aires.jpg",
    },
  ];
  for (const place of places) {
    await prisma.place.create({
      data: place,
    });
  }

  console.log("Los lugares han sido añadidos a la base de datos");
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
