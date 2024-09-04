export const movieController = () => {
  const movies = [
    { id: 1, title: "The Shawshank Redemption", genre: "Drama" },
    { id: 2, title: "The Godfather", genre: "Crime" },
    { id: 3, title: "The Dark Knight", genre: "Action" },
    { id: 4, title: "Pulp Fiction", genre: "Crime" },
    { id: 5, title: "Forrest Gump", genre: "Drama" },
    { id: 6, title: "Inception", genre: "Sci-Fi" },
    { id: 7, title: "The Matrix", genre: "Sci-Fi" },
    { id: 8, title: "Fight Club", genre: "Drama" },
    { id: 9, title: "Interstellar", genre: "Sci-Fi" },
    { id: 10, title: "Parasite", genre: "Thriller" },
  ];
  const getMovies = async (request, response, next) => {
    const { query } = request;
    try {
      response
        .status(200)
        .json({ success: true, message: "Movies found", data: movies });
    } catch (error) {
      next(error);
    }
  };

  const createMovie = async (request, response, next) => {
    const newMovie = request.body;
    try {
      response
        .status(201)
        .json({ data: newMovie, success: true, message: "Movie created" });
    } catch (error) {
      next(error);
    }
  };

  const getMovieById = async (request, response, next) => {
    const { id } = request.params;
    const movieId = Number(id);
    try {
      const movie = await movie.findById(movieId);
      response
        .status(200)
        .json({ data: movie, success: true, message: "Movie found" });
    } catch (error) {
      next(error);
    }
  };

  const deleteMovieById = async (request, response, next) => {
    const { id } = request.params;
    const movieId = Number(id);
    try {
      const movie = await movie.findByIdAndDelete(movieId);
      response
        .status(200)
        .json({ data: movie, success: true, message: "Movie deleted" });
    } catch (error) {
      next(error);
    }
  };

  const updateMovieById = async (request, response, next) => {
    const { id } = request.params;
    const movieId = Number(id);
    const newMovie = request.body;
    try {
      const movie = await movie.findByIdAndUpdate(movieId, newMovie);
      response
        .status(200)
        .json({ data: movie, success: true, message: "Movie updated" });
    } catch (error) {
      next(error);
    }
  };

  return {
    getMovies,
    createMovie,
    getMovieById,
    deleteMovieById,
    updateMovieById,
  };
};
