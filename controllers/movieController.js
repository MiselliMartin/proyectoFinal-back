// import { PrismaClient } from "@prisma/client";
// import HTTP_STATUS from "../helpers/httpStatus.js";

// const prisma = new PrismaClient();

export const movieController = () => {
  const movies =
    /*async (request, response, next) =>*/
    //*JSON deruloO/crud */
    // const { query } = request
    // const userId = Number(query?.id)
    // try {
    //     const likedMovies = await prisma.Movies.findMany({
    //         where: {
    //             userId
    //         },
    //         select: {
    //             movieId: true,
    //             userId: true,
    //             movie: {
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
    //     return response.status(HTTP_STATUS.OK).json(likedMovies)
    // } catch (error) {
    //     next(error)
    // } finally {
    //     await prisma.$disconnect();
    // }

    [
      {
        id: 1,
        title: "Inception",
        image: "https://image.tmdb.org/t/p/w500/8x3xKfn1W4yf7S7vV7Lv5tlK5g.jpg",
      },
      {
        id: 2,
        title: "The Dark Knight",
        image:
          "https://image.tmdb.org/t/p/w500/1h8VndwP1KkmoM3D6E4y44n9Bd4.jpg",
      },
      {
        id: 3,
        title: "Interstellar",
        image:
          "https://image.tmdb.org/t/p/w500/8zBoqCev8c24uL8E3Z5yWwhHTSO.jpg",
      },
      {
        id: 4,
        title: "Fight Club",
        image:
          "https://image.tmdb.org/t/p/w500/6jH0y0kgIeytO4Yq3l9Q3fyBguG.jpg",
      },
      {
        id: 5,
        title: "Pulp Fiction",
        image:
          "https://image.tmdb.org/t/p/w500/6yHjfuJS70ry4Q4kVZbUPlKnnxL.jpg",
      },
      {
        id: 6,
        title: "Forrest Gump",
        image:
          "https://image.tmdb.org/t/p/w500/s0gd65sn8iH4tUOEzAxgFOPsmXY.jpg",
      },
      {
        id: 7,
        title: "The Shawshank Redemption",
        image:
          "https://image.tmdb.org/t/p/w500/qXl1Q2S8U1y02mEcW5ZZS6BWfD6.jpg",
      },
      {
        id: 8,
        title: "The Godfather",
        image:
          "https://image.tmdb.org/t/p/w500/8G8i1HkFlVTTn8giwvoHLX1Qv1h.jpg",
      },
      {
        id: 9,
        title: "The Matrix",
        image:
          "https://image.tmdb.org/t/p/w500/nw6Vp4rN0udZL4qR8VjqCVa4DDA.jpg",
      },
      {
        id: 10,
        title: "The Avengers",
        image:
          "https://image.tmdb.org/t/p/w500/z6bL3z7NjxOl1dUQzRSqA2xv2It.jpg",
      },
      {
        id: 11,
        title: "Gladiator",
        image:
          "https://image.tmdb.org/t/p/w500/qD2gCwlE0Z2IzPl3KBRdrRaf9zT.jpg",
      },
      {
        id: 12,
        title: "The Silence of the Lambs",
        image:
          "https://image.tmdb.org/t/p/w500/lq9H2M9oFnt6NlCeFl5hA2h2MIe.jpg",
      },
      {
        id: 13,
        title: "Saving Private Ryan",
        image:
          "https://image.tmdb.org/t/p/w500/xsD4Q2Xblq6vAFV0bYX9M4Ilxq1.jpg",
      },
      {
        id: 14,
        title: "Schindler's List",
        image:
          "https://image.tmdb.org/t/p/w500/n8c7HflQj3yaq1iDAEb3Xq3J8dD.jpg",
      },
      {
        id: 15,
        title: "The Departed",
        image:
          "https://image.tmdb.org/t/p/w500/4U9aN0w0avd9H53TVcV8eUQb9oR.jpg",
      },
      {
        id: 16,
        title: "The Usual Suspects",
        image:
          "https://image.tmdb.org/t/p/w500/eOoNO8K0NeGv1m5N7HYsO9z3XEu.jpg",
      },
      {
        id: 17,
        title: "Se7en",
        image:
          "https://image.tmdb.org/t/p/w500/2br4glYIX6wz2ddHgw4W6npK6XV.jpg",
      },
      {
        id: 18,
        title: "Braveheart",
        image:
          "https://image.tmdb.org/t/p/w500/cYhRZ9Cz3jPqOEEV8bA3Y4g3E54.jpg",
      },
      {
        id: 19,
        title: "The Lion King",
        image:
          "https://image.tmdb.org/t/p/w500/4z4cxlxW3zANvFZAsYMF85iwxWg.jpg",
      },
      {
        id: 20,
        title: "Titanic",
        image:
          "https://image.tmdb.org/t/p/w500/3A4jl3NgtRb50s3ZxU1wFCUUCpA.jpg",
      },
      {
        id: 21,
        title: "Avatar",
        image:
          "https://image.tmdb.org/t/p/w500/5Pq8lfd5wrN5IikvOQFNiU9du0B.jpg",
      },
      {
        id: 22,
        title: "The Social Network",
        image:
          "https://image.tmdb.org/t/p/w500/mLx7mGdhU9u4dOlG5Fm49DPo59B.jpg",
      },
      {
        id: 23,
        title: "Spider-Man: No Way Home",
        image:
          "https://image.tmdb.org/t/p/w500/mF05L5abkzHP4Sxw0Q59zF9f0bA.jpg",
      },
      {
        id: 24,
        title: "The Pursuit of Happyness",
        image:
          "https://image.tmdb.org/t/p/w500/vhU1wA9bSkCtzH9b9tW8AyPZ9v3.jpg",
      },
      {
        id: 25,
        title: "Toy Story",
        image:
          "https://image.tmdb.org/t/p/w500/4DgHJKYlS0c9T6vOWuhob4L8CKD.jpg",
      },
      {
        id: 26,
        title: "Inside Out",
        image:
          "https://image.tmdb.org/t/p/w500/8y6BML0XbIsC5qaYv25hYFTfb29.jpg",
      },
      {
        id: 27,
        title: "The Incredibles",
        image:
          "https://image.tmdb.org/t/p/w500/9AePLP1pYsQF61g1iIP8Rg7QaMk.jpg",
      },
      {
        id: 28,
        title: "Finding Nemo",
        image:
          "https://image.tmdb.org/t/p/w500/bP3nCZq1QGy8x0j6hX0CfekIgCA.jpg",
      },
      {
        id: 29,
        title: "Zootopia",
        image:
          "https://image.tmdb.org/t/p/w500/n2tQkqMTCukG4C0PbTe8kAqS1qE.jpg",
      },
      {
        id: 30,
        title: "Coco",
        image:
          "https://image.tmdb.org/t/p/w500/9D5CxlxP9o3gAkEufbEEzXguV1N.jpg",
      },
      {
        id: 31,
        title: "The Grand Budapest Hotel",
        image:
          "https://image.tmdb.org/t/p/w500/uU2bxA4qlp6P6E0LRRELP5kVm0d.jpg",
      },
      {
        id: 32,
        title: "The Shape of Water",
        image:
          "https://image.tmdb.org/t/p/w500/z3yIsUy2BGhvKhYr5dU7eWcXjO5.jpg",
      },
      {
        id: 33,
        title: "La La Land",
        image:
          "https://image.tmdb.org/t/p/w500/46hxwj9z0xVV2ApGttDla0TYZql.jpg",
      },
      {
        id: 34,
        title: "Mad Max: Fury Road",
        image:
          "https://image.tmdb.org/t/p/w500/p3Twrww5Z4B9bb3SKD9OCAvM3I8.jpg",
      },
      {
        id: 35,
        title: "Get Out",
        image:
          "https://image.tmdb.org/t/p/w500/rh9YyHdfHTQh1IsjYJHk3f04xyp.jpg",
      },
      {
        id: 36,
        title: "Black Panther",
        image:
          "https://image.tmdb.org/t/p/w500/5Z2qG9A5Q1B3aZAW43oazF86FzC.jpg",
      },
      {
        id: 37,
        title: "Wonder Woman",
        image:
          "https://image.tmdb.org/t/p/w500/xWkFm6SvP8B71sEjZoXW1w63z0Q.jpg",
      },
      {
        id: 38,
        title: "Jurassic Park",
        image:
          "https://image.tmdb.org/t/p/w500/p2Ls7Ae7GJGbRk4M8fVnTLfVXi7.jpg",
      },
      {
        id: 39,
        title: "Star Wars: Episode IV - A New Hope",
        image:
          "https://image.tmdb.org/t/p/w500/4Kj59uGyQYvcdDqZ5nU5RDlPYWY.jpg",
      },
      {
        id: 40,
        title: "The Wizard of Oz",
        image:
          "https://image.tmdb.org/t/p/w500/7cRvxMTQiG1E7QUJaeqRGYDAjRg.jpg",
      },
      {
        id: 41,
        title: "The Lion King",
        image:
          "https://image.tmdb.org/t/p/w500/4z4cxlxW3zANvFZAsYMF85iwxWg.jpg",
      },
      {
        id: 42,
        title: "Titanic",
        image:
          "https://image.tmdb.org/t/p/w500/3A4jl3NgtRb50s3ZxU1wFCUUCpA.jpg",
      },
      {
        id: 43,
        title: "Avatar",
        image:
          "https://image.tmdb.org/t/p/w500/5Pq8lfd5wrN5IikvOQFNiU9du0B.jpg",
      },
      {
        id: 44,
        title: "The Social Network",
        image:
          "https://image.tmdb.org/t/p/w500/mLx7mGdhU9u4dOlG5Fm49DPo59B.jpg",
      },
      {
        id: 45,
        title: "Spider-Man: No Way Home",
        image:
          "https://image.tmdb.org/t/p/w500/mF05L5abkzHP4Sxw0Q59zF9f0bA.jpg",
      },
      {
        id: 46,
        title: "The Pursuit of Happyness",
        image:
          "https://image.tmdb.org/t/p/w500/vhU1wA9bSkCtzH9b9tW8AyPZ9v3.jpg",
      },
      {
        id: 47,
        title: "Toy Story",
        image:
          "https://image.tmdb.org/t/p/w500/4DgHJKYlS0c9T6vOWuhob4L8CKD.jpg",
      },
      {
        id: 48,
        title: "Inside Out",
        image:
          "https://image.tmdb.org/t/p/w500/8y6BML0XbIsC5qaYv25hYFTfb29.jpg",
      },
      {
        id: 49,
        title: "The Incredibles",
        image:
          "https://image.tmdb.org/t/p/w500/9AePLP1pYsQF61g1iIP8Rg7QaMk.jpg",
      },
      {
        id: 50,
        title: "Finding Nemo",
        image:
          "https://image.tmdb.org/t/p/w500/bP3nCZq1QGy8x0j6hX0CfekIgCA.jpg",
      },
    ];
    const getMovies = (req, res) => {
      res.json(movies); // Envía la lista de comidas como respuesta JSON
    };

  return {
    getMovies,
  };
};
