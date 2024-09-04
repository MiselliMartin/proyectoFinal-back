export const movieController = () => {
    const getMovies = async (request, response, next) => {
        const { query } = request
        try {
            response.status(200).json({ success: true, message: 'Movies found' })
        } catch (error) {
            next(error)
        }
    }
    const createMovie = async (request, response, next) => {
        const newMovie = request.body
        try {
            response.status(201).json({ data: newMovie, success: true, message: 'Movie created' })
        } catch (error) {
            next(error)
        }
    }

    const getMovieById = async (request, response, next) => {
        const { id } = request.params
        const movieId = Number(id)
        try {
            const movie = await movie.findById(movieId)
            response.status(200).json({ data: movie, success: true, message: 'Movie found' })
        } catch (error) {
            next(error)
        }
    }

    const deleteMovieById = async (request, response, next) => {
        const { id } = request.params
        const movieId = Number(id)
        try {
            const movie = await movie.findByIdAndDelete(movieId)
            response.status(200).json({ data: movie, success: true, message: 'Movie deleted' })
        } catch (error) {
            next(error)
        }
    }

    const updateMovieById = async (request, response, next) => {
        const { id } = request.params
        const movieId = Number(id)
        const newMovie = request.body
        try {
            const movie = await movie.findByIdAndUpdate(movieId, newMovie)
            response.status(200).json({ data: movie, success: true, message: 'Movie updated' })
        } catch (error) {
            next(error)
        }
    }

    return {
        getMovies,
        createMovie,
        getMovieById,
        deleteMovieById,
        updateMovieById
    }

}