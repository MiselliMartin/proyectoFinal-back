import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const movies = [
    {
      title: "Origen",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "El Caballero de la Noche",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Interstellar",
      urlImage: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "El Club de la Pelea",
      urlImage: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Pulp Fiction",
      urlImage: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Forrest Gump",
      urlImage: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Sueños de Libertad",
      urlImage: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "El Padrino",
      urlImage: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Matrix",
      urlImage: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Los Vengadores",
      urlImage: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Gladiador",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "El Silencio de los Inocentes",
      urlImage: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Rescatando al Soldado Ryan",
      urlImage: "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "La lista de Schindler",
      urlImage: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Los Infiltrados",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Los Sospechosos de Siempre",
      urlImage: "https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Se7en: Los Siete Pecados Capitales",
      urlImage: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
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
      urlImage: "https://m.media-amazon.com/images/M/MV5BMTQ5NjQ0NDI3NF5BMl5BanBnXkFtZTcwNDI0MjEzMw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Parque Jurásico",
      urlImage: "https://m.media-amazon.com/images/M/MV5BNjUyODQzNTk4OV5BMl5BanBnXkFtZTcwNjYyNzM5Mg@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "El Señor de los Anillos: La Comunidad del Anillo",
      urlImage: "https://m.media-amazon.com/images/M/MV5BNzJmNDBjNjAtNjA5NC00NWI0LTk5MDktYTg2YjRiYzZkNmQzXkEyXkFqcGdeQXVyNDQxNjE0NjI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Regreso al Futuro",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMTY0OTU3NjUwOF5BMl5BanBnXkFtZTcwNzY0NjA4NA@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Casablanca",
      urlImage: "https://m.media-amazon.com/images/M/MV5BNjBlM2Y4MTktNDM2MS00NmQ0LWE2ZmUtNGI3ZmU5MTg3NmFmXkEyXkFqcGdeQXVyMjQ3NTAzNTU@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "El Mago de Oz",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMjEwMTU3MzA5MF5BMl5BanBnXkFtZTcwNjY0MDY3NA@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "La Novicia Rebelde",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMjI0NjE5NTk0MF5BMl5BanBnXkFtZTgwNTQzNTQ2MjE@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "El Diario de Bridget Jones",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMTM1MjQ4MDA5MV5BMl5BanBnXkFtZTcwMjM2OTg3Mw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Toy Story",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMjE4NTk2MTMzNl5BMl5BanBnXkFtZTcwMzUzMDk4NA@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "El Gran Lebowski",
      urlImage: "https://m.media-amazon.com/images/M/MV5BNTMzNTA2MjIxNF5BMl5BanBnXkFtZTcwNjE0MDQ3Mw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Terminator",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMjA5MDMzNjk1NF5BMl5BanBnXkFtZTcwMTY3MjY4Mw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "La La Land",
      urlImage: "https://m.media-amazon.com/images/M/MV5BNjI0MDU2NTA5Nl5BMl5BanBnXkFtZTgwMDk3NTAyMjI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "El Sexto Sentido",
      urlImage: "https://m.media-amazon.com/images/M/MV5BNjY4OTYzMzIwMV5BMl5BanBnXkFtZTcwNjE5Nzg4Mw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "El Club de los Cinco",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMjA4MzYzNjY5OF5BMl5BanBnXkFtZTcwNzM5NDA5NA@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Una Mente Maravillosa",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMTI4NzYzMjI4NF5BMl5BanBnXkFtZTcwMTY1MjIwMQ@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "La Princesa Prometida",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMjA5MjA4MDA1OV5BMl5BanBnXkFtZTcwNzU4NTY1NA@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "El Club de los Poetas Muertos",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMjAwNzU3ODc3NF5BMl5BanBnXkFtZTcwMDMwMzA2Mw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Blade Runner 2049",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMTg3MzM5MzA3N15BMl5BanBnXkFtZTgwNjI2Njk0MzI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "La Forma del Agua",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMTQ0NTg0MDY4OF5BMl5BanBnXkFtZTgwOTYyMzM2MjI@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Mad Max: Furia en el Camino",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMTc0Mzg2MDg4MF5BMl5BanBnXkFtZTgwMDczNTIzNjE@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "¡Huye!",
      urlImage: "https://m.media-amazon.com/images/M/MV5BMjQyNjEyNzQzOF5BMl5BanBnXkFtZTgwMzg5MDIwMzI@._V1_FMjpg_UX1000_.jpg",
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