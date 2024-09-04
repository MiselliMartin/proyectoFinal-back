import { Router } from 'express'
import { mealController } from '../controllers/mealController.js'

const mealRouter = Router()
const { getMeals, createMeal, getMealById, deleteMealById, updateMealById } = mealController()

mealRouter.route('/meals')
    .get(getMeals)
    .post(createMeal)
mealRouter.route('/meals/:id')
    .get(getMealById)
    .delete(deleteMealById)
    .patch(updateMealById)

export default mealRouter
