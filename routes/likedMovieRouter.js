import { Router } from 'express'
import { likedMovieController } from '../controllers/likedMovieController.js'
import { validateToken } from '../middlewares/validateToken.js'

const likedMovieRouter = Router()
const { markAsLiked, getLikedMovies } = likedMovieController()

likedMovieRouter.route('/movies/liked')
    .post(validateToken, markAsLiked)
    .get(getLikedMovies)

export default likedMovieRouter
