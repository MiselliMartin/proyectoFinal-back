import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const movies = [
    {
      title: "Origen",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/Origen.webp"
    },
    {
      title: "El Caballero de la Noche",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/ElCaballerodelaNoche.webp"
    },
    {
      title: "Interestellar",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/interestellar.webp"
    },
    {
      title: "El Club de la Pelea",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/ElClubdelaPelea.webp"
    },
    {
      title: "Pulp Fiction",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/pulpFiction.webp"
    },
    {
      title: "Forrest Gump",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/forrestGump.webp"
    },
    {
      title: "Sueños de Libertad",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/SueñosdeLibertad.webp"
    },
    {
      title: "El Padrino",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/ElPadrino.webp"
    },
    {
      title: "Matrix",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/matrix.webp"
    },
    {
      title: "Avengers",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/avengers.webp"
    },
    {
      title: "Gladiador",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/gladiador.webp"
    },
    {
      title: "El Silencio de los Inocentes",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/ElSilenciodelosInocentes.webp"
    },
    {
      title: "Rescatando al Soldado Ryan",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/RescatandoalSoldadoRyan.webp"
    },
    {
      title: "La Lista de Schindler",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/LalistadeSchindler.webp"
    },
    {
      title: "Los Infiltrados",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/losInfiltrados.webp"
    },
    {
      title: "Los Sospechosos de Siempre",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/LosSospechososdeSiempre.webp"
    },
    {
      title: "Seven",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/seven.webp"
    },
    {
      title: "Corazón Valiente",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/CorazónValiente.webp"
    },
    {
      title: "El Rey León",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/reyLeon.webp"
    },
    {
      title: "Titanic",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/titanic.webp"
    },
    {
      title: "Avatar",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/avatar.webp"
    },
    {
      title: "La Red Social",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/LaRedSocial.webp"
    },
    {
      title: "Spider-Man",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/spiderMan.webp"
    },
    {
      title: "En Búsqueda de la Felicidad",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/enbuscadelafelicidad.webp"
    },
    {
      title: "Jurassic Park",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/jurasicpark.webp"
    },
    {
      title: "El Señor de los Anillos",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/elseñordelosanillos.webp"
    },
    {
      title: "Volver al Futuro",
      urlImage: "https://plannerbyddy.s3.us-east-2.amazonaws.com/optimizadasmovies/volveralfuturo.webp"
    }
  ];
  
  

for (const movie of movies) {
  await prisma.movie.create({
    data: movie,
  });
}

  console.log("Las peliculas han sido añadidas a la base de datos");
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });