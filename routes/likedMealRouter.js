import { Router } from 'express'
import { likedMealController } from '../controllers/likedMealController.js'

const likedMealRouter = Router()
const { markAsLiked, getLikedMeals } = likedMealController()

likedMealRouter.route('/likedMeals')
    .post(markAsLiked)
    .get(getLikedMeals)

export default likedMealRouter
