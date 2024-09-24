import { Router } from 'express'
import { likedPlaceController } from '../controllers/likedPlaceController.js'

const likedPlaceRouter = Router()
const { markAsLiked, getLikedPlaces, getMostLikedPlaces } = likedPlaceController()

likedPlaceRouter.route('/events/:eventId/places/liked')
    .post(markAsLiked)
    .get(getLikedPlaces)


likedPlaceRouter.route('/events/:eventId/places/mostLiked')
    .get(getMostLikedPlaces)


export default likedPlaceRouter
