import { Router } from 'express'
import { dislikedPlaceController } from '../controllers/dislikedPlaceController.js'

const dislikedPlaceRouter = Router()
const { markAsDisliked, getDislikedPlaces } = dislikedPlaceController()

dislikedPlaceRouter.route('/places/disliked')
    .post(markAsDisliked)
    .get(getDislikedPlaces)

export default dislikedPlaceRouter
