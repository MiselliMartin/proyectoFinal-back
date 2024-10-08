import { Router } from 'express'
import { dislikedMealController } from '../controllers/dislikedMealController.js'

const dislikedMealRouter = Router()
const { markAsDisliked, getDislikedMeals } = dislikedMealController()

dislikedMealRouter.route('/events/:eventId/meals/disliked')
    .post(markAsDisliked)
    .get(getDislikedMeals)

export default dislikedMealRouter
