import { Router } from 'express';
import { usersInEventController } from '../controllers/usersInEventController.js';
// import { validateToken } from '../middlewares/validateToken.js'

const usersInEventRouter = Router();
const { getUsersInEvent, getEventsForUser } = usersInEventController();

usersInEventRouter.route('/events/:eventId/users')
    .get(/*validateToken,*/ getUsersInEvent);

usersInEventRouter.route('/users/:userId/events')
    .get(/*validateToken,*/ getEventsForUser);

export default usersInEventRouter;