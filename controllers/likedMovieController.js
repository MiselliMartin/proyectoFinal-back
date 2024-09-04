export const likedMovieController = () => {
    const markAsLiked = async (request, response, next) => {
        const { body } = request
        const movieId = Number(body.movieId)
        const userId = Number(body.userId)

        try {
            const likedMovie = await likedMovie.create({ movieId, userId })
            response.status(201).json({ data: likedMovie, success: true, message: 'Movie liked' })
        } catch (error) {
            next(error)
        }
    }

    const getLikedMovies = async (request, response, next) => {
        const { query } = request
        const userId = Number(query?.id)
        try {
            const likedMovies = await likedMovie.findMany({ userId })
            response.status(200).json({ data: likedMovies, success: true, message: 'Liked movies found' })
        } catch (error) {
            next(error)
        }
    }

    return {
        markAsLiked,
        getLikedMovies
    }
}