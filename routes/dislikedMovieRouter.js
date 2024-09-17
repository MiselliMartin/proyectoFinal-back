import { Router } from 'express'
import { dislikedMovieController } from '../controllers/dislikedMovieController.js'

const dislikedMovieRouter = Router()
const { markAsDisliked, getDislikedMovies } = dislikedMovieController()

dislikedMovieRouter.route('/dislikedMovies')
    .post(markAsDisliked)
    .get(getDislikedMovies)

export default dislikedMovieRouter
