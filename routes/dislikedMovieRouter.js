import { Router } from 'express'
import { dislikedMovieController } from '../controllers/dislikedMovieController.js'

const dislikedMovieRouter = Router()
const { markAsDisliked, getDislikedMovies } = dislikedMovieController()

dislikedMovieRouter.route('/events/:eventId/movies/disliked')
    .post(markAsDisliked)
    .get(getDislikedMovies)

export default dislikedMovieRouter
