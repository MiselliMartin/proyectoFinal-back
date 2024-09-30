import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const places = [
    {
      title: "Parque Tres de Febrero",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/parque-tres-de-febrero.webp",
    },
    {
      title: "Puerto Madero",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/1200px-Puerto_Madero%2C_Buenos_Aires_%2840689219792%29.webp",
    },
    {
      title: "Caminito",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/caminito-800.webp",
    },
    {
      title: "Plaza de Mayo",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/plazademayo.webp",
    },
    {
      title: "Recoleta",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/recoleta.webp",
    },
    {
      title: "Jardín Botánico",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/botanico_jardin-1500x610.webp",
    },
    {
      title: "Avenida 9 de Julio",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/9dejulio.webp",
    },
    {
      title: "Palermo Soho",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/palermosoho.webp",
    },
    {
      title: "Barrio Chino",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/barriochino.webp",
    },
    {
      title: "Costanera Sur",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/costanera+sur.webp",
    },
      {
        title: "Teatro Colón",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/teatrocolon.webp",
      },
      {
        title: "Plaza San Martín",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/plazasanmartin.webp",
      },
      {
        title: "Palacio Barolo",
        urlImage: "",
      },
      {
        title: "El Obelisco",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/obelisco.webp",
      },
      {
        title: "Museo Nacional de Bellas Artes",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/Museo+Nacional+de+Bellas+Artes.webp",
      },
      {
        title: "Plaza Italia",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/Plaza_Italia_.webp",
      },
      {
        title: "Malba",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/malba.webp",
      },
      {
        title: "Barrio de San Telmo",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/san_telmo_.webp",
      },
      {
        title: "Catedral Metropolitana",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/catedral-metropolitana.webp",
      },
      {
        title: "Parque de la Memoria",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/parquedelamemoria.webp",
      },
      {
        title: "Planetario Galileo Galilei",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/planetario.webp",
      },
      {
        title: "Plaza Serrano",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/plaza-serrano-palermo-feria.webp",
      },
      {
        title: "Barrio La Boca",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/barriolaboca.webp",
      },
      {
        title: "Costanera Norte",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/costanera-norte-.webp",
      },
      {
        title: "Mercado de San Telmo",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/mercado_san_telmo.webp",
      },
      {
        title: "Museo Evita",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/museoevita.webp",
      },
      {
        title: "Barrio Palermo",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/barriopalermo.webp",
      },
      {
        title: "Boca Juniors Stadium",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/bocaestadio.webp",
      },
      {
        title: "Parque Centenario",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/parque-centenario.webp",
      },
      {
        title: "Palacio de Aguas Corrientes",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/palacio_aguas_corrientes.webp",
      },
      {
        title: "Avenida Corrientes",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/calle_corrientes.webp",
      },
      {
        title: "Museo de Arte Moderno",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/museomoderno.webp",
      },
      {
        title: "El Rosedal",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/el-rosedal-de-palermo.webp",
      },
      {
        title: "Plaza de los Dos Congresos",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/monumento+dos+congresos.webp",
      },
      {
        title: "Templo Libertad",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/templolibertad.webp",
      },
      {
        title: "Cerro de la Gloria",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/cerrodelagloria.webp",
      },
      {
        title: "El Tigre",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/tigre.webp",
      },
      {
        title: "Parque Lezama",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/parque_lezama_1200.webp",
      },
      {
        title: "Feria de Mataderos",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/feriamataderos.webp",
      },
      {
        title: "Barrio Villa Devoto",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/barriovilladevoto.webp",
      },
      {
        title: "Centro Cultural Recoleta",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/Centro_Cultural_Recoleta_2012.webp",
      },
      {
        title: "Plaza de la República",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/plazadelarepublica.webp",
      },
      {
        title: "Jardín Japonés",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/jardinjapojnez.webp",
      },
      {
        title: "Barrio Belgrano",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/barriobelgrano.webp",
      },
      {
        title: "Centro Cultural Kirchner",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/centro_cultural_kirchner.webp",
      },
      {
        title: "Barrio de Caballito",
        urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbuddy?region=us-east-2&bucketType=general&prefix=placesoptimizado/caballito_Plazoleta_Cris%C3%B3logo_Larralde_2.webp",
      },
      {
        title: "Plaza Vicente López",
        urlImage: "https://buenosaires.gob.ar/sites/default/files/styles/full_width/public/2023-03/VICENTE%20L%20Y%20PLANES%203_0.JPG?itok=F31Txesu",
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
