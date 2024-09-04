import { Router } from 'express'
import { movieController } from '../controllers/movieController.js'

const movieRouter = Router()
const { getMovies, createMovie, getMovieById, deleteMovieById, updateMovieById } = movieController()

movieRouter.route('/movies')
    .get(getMovies)
    .post(createMovie)
movieRouter.route('/movies/:id')
    .get(getMovieById)
    .delete(deleteMovieById)
    .patch(updateMovieById)

export default movieRouter
