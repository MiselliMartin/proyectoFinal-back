import { Router } from 'express'
import { dislikedPlaceController } from '../controllers/dislikedPlaceController.js'

const dislikedPlaceRouter = Router()
const { markAsDisliked, getDislikedPlaces } = dislikedPlaceController()

dislikedPlaceRouter.route('/dislikedPlaces')
    .post(markAsDisliked)
    .get(getDislikedPlaces)

export default dislikedPlaceRouter
