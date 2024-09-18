import { Router } from 'express'
import { likedMealController } from '../controllers/likedMealController.js'

const likedMealRouter = Router()
const { markAsLiked, getLikedMeals } = likedMealController()

likedMealRouter.route('/meals/liked')
    .post(markAsLiked)
    .get(getLikedMeals)

export default likedMealRouter
