import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const movies = [
    {
      title: "Inception",
      urlImage:
        "https://image.tmdb.org/t/p/w500/8x3xKfn1W4yf7S7vV7Lv5tlK5g.jpg",
    },
    {
      title: "The Dark Knight",
      urlImage:
        "https://image.tmdb.org/t/p/w500/1h8VndwP1KkmoM3D6E4y44n9Bd4.jpg",
    },
    {
      title: "Interstellar",
      urlImage:
        "https://image.tmdb.org/t/p/w500/8zBoqCev8c24uL8E3Z5yWwhHTSO.jpg",
    },
    {
      title: "Fight Club",
      urlImage:
        "https://image.tmdb.org/t/p/w500/6jH0y0kgIeytO4Yq3l9Q3fyBguG.jpg",
    },
    {
      title: "Pulp Fiction",
      urlImage:
        "https://image.tmdb.org/t/p/w500/6yHjfuJS70ry4Q4kVZbUPlKnnxL.jpg",
    },
    {
      title: "Forrest Gump",
      urlImage:
        "https://image.tmdb.org/t/p/w500/s0gd65sn8iH4tUOEzAxgFOPsmXY.jpg",
    },
    {
      title: "The Shawshank Redemption",
      urlImage:
        "https://image.tmdb.org/t/p/w500/qXl1Q2S8U1y02mEcW5ZZS6BWfD6.jpg",
    },
    {
      title: "The Godfather",
      urlImage:
        "https://image.tmdb.org/t/p/w500/8G8i1HkFlVTTn8giwvoHLX1Qv1h.jpg",
    },
    {
      title: "The Matrix",
      urlImage:
        "https://image.tmdb.org/t/p/w500/nw6Vp4rN0udZL4qR8VjqCVa4DDA.jpg",
    },
    {
      title: "The Avengers",
      urlImage:
        "https://image.tmdb.org/t/p/w500/z6bL3z7NjxOl1dUQzRSqA2xv2It.jpg",
    },
    {
      title: "Gladiator",
      urlImage:
        "https://image.tmdb.org/t/p/w500/qD2gCwlE0Z2IzPl3KBRdrRaf9zT.jpg",
    },
    {
      title: "The Silence of the Lambs",
      urlImage:
        "https://image.tmdb.org/t/p/w500/lq9H2M9oFnt6NlCeFl5hA2h2MIe.jpg",
    },
    {
      title: "Saving Private Ryan",
      urlImage:
        "https://image.tmdb.org/t/p/w500/xsD4Q2Xblq6vAFV0bYX9M4Ilxq1.jpg",
    },
    {
      title: "Schindler's List",
      urlImage:
        "https://image.tmdb.org/t/p/w500/n8c7HflQj3yaq1iDAEb3Xq3J8dD.jpg",
    },
    {
      title: "The Departed",
      urlImage:
        "https://image.tmdb.org/t/p/w500/4U9aN0w0avd9H53TVcV8eUQb9oR.jpg",
    },
    {
      title: "The Usual Suspects",
      urlImage:
        "https://image.tmdb.org/t/p/w500/eOoNO8K0NeGv1m5N7HYsO9z3XEu.jpg",
    },
    {
      title: "Se7en",
      urlImage:
        "https://image.tmdb.org/t/p/w500/2br4glYIX6wz2ddHgw4W6npK6XV.jpg",
    },
    {
      title: "Braveheart",
      urlImage:
        "https://image.tmdb.org/t/p/w500/cYhRZ9Cz3jPqOEEV8bA3Y4g3E54.jpg",
    },
    {
      title: "The Lion King",
      urlImage:
        "https://image.tmdb.org/t/p/w500/4z4cxlxW3zANvFZAsYMF85iwxWg.jpg",
    },
    {
      title: "Titanic",
      urlImage:
        "https://image.tmdb.org/t/p/w500/3A4jl3NgtRb50s3ZxU1wFCUUCpA.jpg",
    },
    {
      title: "Avatar",
      urlImage:
        "https://image.tmdb.org/t/p/w500/5Pq8lfd5wrN5IikvOQFNiU9du0B.jpg",
    },
    {
      title: "The Social Network",
      urlImage:
        "https://image.tmdb.org/t/p/w500/mLx7mGdhU9u4dOlG5Fm49DPo59B.jpg",
    },
    {
      title: "Spider-Man: No Way Home",
      urlImage:
        "https://image.tmdb.org/t/p/w500/mF05L5abkzHP4Sxw0Q59zF9f0bA.jpg",
    },
    {
      title: "The Pursuit of Happyness",
      urlImage:
        "https://image.tmdb.org/t/p/w500/vhU1wA9bSkCtzH9b9tW8AyPZ9v3.jpg",
    },
    {
      title: "Toy Story",
      urlImage:
        "https://image.tmdb.org/t/p/w500/4DgHJKYlS0c9T6vOWuhob4L8CKD.jpg",
    },
    {
      title: "Inside Out",
      urlImage:
        "https://image.tmdb.org/t/p/w500/8y6BML0XbIsC5qaYv25hYFTfb29.jpg",
    },
    {
      title: "The Incredibles",
      urlImage:
        "https://image.tmdb.org/t/p/w500/9AePLP1pYsQF61g1iIP8Rg7QaMk.jpg",
    },
    {
      title: "Finding Nemo",
      urlImage:
        "https://image.tmdb.org/t/p/w500/bP3nCZq1QGy8x0j6hX0CfekIgCA.jpg",
    },
    {
      title: "Zootopia",
      urlImage:
        "https://image.tmdb.org/t/p/w500/n2tQkqMTCukG4C0PbTe8kAqS1qE.jpg",
    },
    {
      title: "Coco",
      urlImage:
        "https://image.tmdb.org/t/p/w500/9D5CxlxP9o3gAkEufbEEzXguV1N.jpg",
    },
    {
      title: "The Grand Budapest Hotel",
      urlImage:
        "https://image.tmdb.org/t/p/w500/uU2bxA4qlp6P6E0LRRELP5kVm0d.jpg",
    },
    {
      title: "The Shape of Water",
      urlImage:
        "https://image.tmdb.org/t/p/w500/z3yIsUy2BGhvKhYr5dU7eWcXjO5.jpg",
    },
    {
      title: "La La Land",
      urlImage:
        "https://image.tmdb.org/t/p/w500/46hxwj9z0xVV2ApGttDla0TYZql.jpg",
    },
    {
      title: "Mad Max: Fury Road",
      urlImage:
        "https://image.tmdb.org/t/p/w500/p3Twrww5Z4B9bb3SKD9OCAvM3I8.jpg",
    },
    {
      title: "Get Out",
      urlImage:
        "https://image.tmdb.org/t/p/w500/rh9YyHdfHTQh1IsjYJHk3f04xyp.jpg",
    },
    {
      title: "Black Panther",
      urlImage:
        "https://image.tmdb.org/t/p/w500/5Z2qG9A5Q1B3aZAW43oazF86FzC.jpg",
    },
    {
      title: "Wonder Woman",
      urlImage:
        "https://image.tmdb.org/t/p/w500/xWkFm6SvP8B71sEjZoXW1w63z0Q.jpg",
    },
    {
      title: "Jurassic Park",
      urlImage:
        "https://image.tmdb.org/t/p/w500/p2Ls7Ae7GJGbRk4M8fVnTLfVXi7.jpg",
    },
    {
      title: "Star Wars: Episode IV - A New Hope",
      urlImage:
        "https://image.tmdb.org/t/p/w500/4Kj59uGyQYvcdDqZ5nU5RDlPYWY.jpg",
    },
    {
      title: "The Wizard of Oz",
      urlImage:
        "https://image.tmdb.org/t/p/w500/7cRvxMTQiG1E7QUJaeqRGYDAjRg.jpg",
    },
    {
      title: "The Lion King",
      urlImage:
        "https://image.tmdb.org/t/p/w500/4z4cxlxW3zANvFZAsYMF85iwxWg.jpg",
    },
    {
      title: "Titanic",
      urlImage:
        "https://image.tmdb.org/t/p/w500/3A4jl3NgtRb50s3ZxU1wFCUUCpA.jpg",
    },
    {
      title: "Avatar",
      urlImage:
        "https://image.tmdb.org/t/p/w500/5Pq8lfd5wrN5IikvOQFNiU9du0B.jpg",
    },
    {
      title: "The Social Network",
      urlImage:
        "https://image.tmdb.org/t/p/w500/mLx7mGdhU9u4dOlG5Fm49DPo59B.jpg",
    },
    {
      title: "Spider-Man: No Way Home",
      urlImage:
        "https://image.tmdb.org/t/p/w500/mF05L5abkzHP4Sxw0Q59zF9f0bA.jpg",
    },
    {
      title: "The Pursuit of Happyness",
      urlImage:
        "https://image.tmdb.org/t/p/w500/vhU1wA9bSkCtzH9b9tW8AyPZ9v3.jpg",
    },
    {
      title: "Toy Story",
      urlImage:
        "https://image.tmdb.org/t/p/w500/4DgHJKYlS0c9T6vOWuhob4L8CKD.jpg",
    },
    {
      title: "Inside Out",
      urlImage:
        "https://image.tmdb.org/t/p/w500/8y6BML0XbIsC5qaYv25hYFTfb29.jpg",
    },
    {
      title: "The Incredibles",
      urlImage:
        "https://image.tmdb.org/t/p/w500/9AePLP1pYsQF61g1iIP8Rg7QaMk.jpg",
    },
    {
      title: "Finding Nemo",
      urlImage:
        "https://image.tmdb.org/t/p/w500/bP3nCZq1QGy8x0j6hX0CfekIgCA.jpg",
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
