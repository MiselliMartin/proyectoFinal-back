import { Router } from 'express'
import { decisionController } from '../controllers/decisionController.js'

const dislikedMealRouter = Router()
const { createDecision, getDecision } = decisionController()

dislikedMealRouter.route('/events/:eventId/decision')
    .post(createDecision)
    .get(getDecision)

export default dislikedMealRouter
