import { Router } from 'express'
import { likedMealController } from '../controllers/likedMealController.js'

const likedMealRouter = Router()
const { markAsLiked, getLikedMeals, getMostLikedMeals } = likedMealController()

likedMealRouter.route('/events/:eventId/meals/liked')
    .post(markAsLiked)
    .get(getLikedMeals)

likedMealRouter.route('/events/:eventId/meals/mostLiked')
    .get(getMostLikedMeals)

export default likedMealRouter
