import { Router } from 'express'
import { eventController } from '../controllers/eventController.js'
import { validateToken } from '../middlewares/validateToken.js'

const eventRouter = Router()
const { createEvent, getEventById, updateEvent, deleteEvent, listEvents, addUserToEvent, removeUserFromEvent } = eventController()

eventRouter.route('/events')
    .get(listEvents)
    .post(validateToken, createEvent)

eventRouter.route('/events/:id')
    .get(getEventById)
    .put(validateToken, updateEvent)
    .delete(validateToken, deleteEvent)

eventRouter.use('/events/:eventId/roomDecisions', validateToken)

eventRouter.route('/events/:eventId/users')
    .post(addUserToEvent)

eventRouter.route('/events/:eventId/users/:userId')
    .delete(removeUserFromEvent)

export default eventRouter