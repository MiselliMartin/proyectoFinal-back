import { Router } from 'express'
import { likedMovieController } from '../controllers/likedMovieController.js'
// import { validateToken } from '../middlewares/validateToken.js'

const likedMovieRouter = Router()
const { markAsLiked, getLikedMovies, getMostLikedMovies } = likedMovieController()

likedMovieRouter.route('/movies/liked')
    .post(markAsLiked)
    .get(getLikedMovies)

likedMovieRouter.route('/movies/mostLiked')
    .get(getMostLikedMovies)

export default likedMovieRouter
