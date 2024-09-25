import { Router } from 'express';
import { suggestAlternatives } from '../controllers/aiController.js';

const aiRouter = Router();
const { getRecommendations } = aiController()

aiRouter.route('/events/:eventId/recommendations')
    .get(getRecommendations, suggestAlternatives);


export default aiRouter;
