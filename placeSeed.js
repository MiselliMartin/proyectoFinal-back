import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const places = [
      {
          title: "Cine",
          urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/cine.webp"
      },
      {
          title: "Teatro",
          urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/teatro.webp"
      },
      {
          title: "Parque",
          urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/parque.webp"
      },
      {
          title: "Museo",
          urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/museo.webp"
      },
      {
        title: "Centro Comercial",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/centrocomercial.webp"
      },
      {
        title: "Restaurante",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/restaurante.webp"
      },
      {
        title: "Feria",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/feria.webp"
      },
      {
        title: "Parque de Atracciones",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/parque-de-atracciones.webp"
      },
      {
        title: "Zoológico",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/zoo.webp"
      },
      {
        title: "Acuario",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/acuario.webp"
      },
      {
        title: "Mirador",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/mirador.webp"
      },
      {
        title: "Discoteca",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/discoteca.webp"
      },
      {
        title: "Cafetería",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/cafeteria.webp"
      },
      {
        title: "Cervecería",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/cerveceria.webp"
      },
      {
          title: "Catedral",
          urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/catedral.webp"
      },
      {
        title: "Centro de Convenciones",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/convenciones.webp"
      },
      {
        title: "Río",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/rio.webp"
      },
      {
        title: "Playa",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/playa.webp"
      },
      {
        title: "Jardín Botánico",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/jardinbotanico.webp"
      },
      {
        title: "Parque Nacional",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/parquenacional.webp"
      },
      {
        title: "Centro Recreativo",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/centrorecreativo.webp"
      },
      {
        title: "Biblioteca",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/biblioteca.webp"
      },
      {
        title: "Estadio",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/estadio.webp"
      },
      {
        title: "Centro de Arte",
        urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/centrodearte.webp"
      },
      {
          title: "Campo de Golf",
          urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/golf.webp"
        },
        {
          title: "Galería de Arte",
          urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/galeriadearte.webp"
        },
        {
          title: "Complejo Deportivo",
          urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/placesoptimizado/complejodeportivo.webp"
      }

  
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