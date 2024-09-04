import { Router } from 'express'
import { placeController } from '../controllers/placeController.js'

const placeRouter = Router()
const { getPlaces, createPlace, getPlaceById, deletePlaceById, updatePlaceById } = placeController()

placeRouter.route('/places')
    .get(getPlaces)
    .post(createPlace)
placeRouter.route('/places/:id')
    .get(getPlaceById)
    .delete(deletePlaceById)
    .patch(updatePlaceById)

export default placeRouter
