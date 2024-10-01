import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const movies = [
    {
      title: "Origen",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/origen.jpg",
    },
    {
      title: "El Caballero de la Noche",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/caballerodelanoche.jpg",
    },
    {
      title: "Interstellar",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/interestelar.jpg",
    },
    {
      title: "El Club de la Pelea",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/clubdelapelea.jpg",
    },
    {
      title: "Pulp Fiction",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/pulpfiction.jpg",
    },
    {
      title: "Forrest Gump",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/forrest.jpg",
    },
    {
      title: "Sueños de Libertad",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/sue%C3%B1osdelibertad.jpg",
    },
    {
      title: "El Padrino",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/elpadrino.jpg",
    },
    {
      title: "Matrix",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/matrix.jpg",
    },
    {
      title: "Los Vengadores",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/vengadores.jpg",
    },
    {
      title: "Gladiador",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/vengadores.jpg",
    },
    {
      title: "El Silencio de los Inocentes",
      urlImage: "",
    },
    {
      title: "Rescatando al Soldado Ryan",
      urlImage: "",
    },
    {
      title: "La lista de Schindler",
      urlImage: "",
    },
    {
      title: "Los Infiltrados",
      urlImage: "",
    },
    {
      title: "Los Sospechosos de Siempre",
      urlImage: "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Se7en: Los Siete Pecados Capitales",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/lossietepecadoscapitales+%281%29.jpg",
    },
    {
      title: "Corazón Valiente",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "El Rey León",
      urlImage: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Titanic",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Avatar",
      urlImage: "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "La Red Social",
      urlImage: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Spider-Man: Sin Camino a Casa",
      urlImage: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "En busca de la felicidad",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/enbuscadelafelicidad.webp",
    },
    {
      title: "Parque Jurásico",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/jurasicpark.webp",
    },
    {
      title: "El Señor de los Anillos: La Comunidad del Anillo",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/else%C3%B1ordelosanillos.webp",
    },
    {
      title: "Volver al Futuro",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/volveralfuturo.webp",
    },
    {
      title: "Casablanca",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/casablancca.webp",
    },
    {
      title: "El Mago de Oz",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/elmagodeoz.webp",
    },
    {
      title: "La Novicia Rebelde",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/lanoviciarebelde.webp",
    },
    {
      title: "El Diario de Bridget Jones",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/El+Diario+de+Bridget+Jones.webp",
    },
    {
      title: "Toy Story",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/toystory.webp",
    },
    {
      title: "El Gran Lebowski",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/El+Gran+Lebowski.webp",
    },
    {
      title: "Terminator",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/Terminator.webp",
    },
    {
      title: "La La Land",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/La+La+Land.webp",
    },
    {
      title: "El Sexto Sentido",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/El+Sexto+Sentido.webp",
    },
    {
      title: "El Club de los Cinco",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/El+Club+de+los+Cinco.webp",
    },
    {
      title: "Una Mente Maravillosa",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/Una+Mente+Maravillosa.webp",
    },
    {
      title: "La Princesa Prometida",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/La+Princesa+Prometida.webp",
    },
    {
      title: "El Club de los Poetas Muertos",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/El+Club+de+los+Poetas+Muertos.webp",
    },
    {
      title: "Blade Runner 2049",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/Blade+Runner+2049+%281%29.webp",
    },
    {
      title: "La Forma del Agua",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/La+Forma+del+Agua.webp",
    },
    {
      title: "Mad Max: Furia en el Camino",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/Mad+MaxFuria+en+el+Camino.webp",
    },
    {
      title: "¡Huye!",
      urlImage: "https://us-east-2.console.aws.amazon.com/s3/object/plannerbyddy?region=us-east-2&bucketType=general&prefix=optimizadasmovies/huye.webp",
    },
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


