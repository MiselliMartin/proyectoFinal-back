import { Router } from 'express'
import { likedPlaceController } from '../controllers/likedPlaceController.js'

const likedPlaceRouter = Router()
const { markAsLiked, getLikedPlaces } = likedPlaceController()

likedPlaceRouter.route('/likedPlaces')
    .post(markAsLiked)
    .get(getLikedPlaces)

export default likedPlaceRouter
