import { Router } from 'express'
import { likedMovieController } from '../controllers/likedMovieController.js'

const likedMovieRouter = Router()
const { markAsLiked, getLikedMovies } = likedMovieController()

likedMovieRouter.route('/likedMovies')
    .post(markAsLiked)
    .get(getLikedMovies)

export default likedMovieRouter
