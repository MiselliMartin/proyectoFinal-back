import { Router } from 'express';
import { suggestAlternatives } from '../controllers/aiController.js';

const aiRouter = Router();
const { getRecommendations } = aiController()

aiRouter.route('/events/:eventId/result/ai')
    .get(getRecommendations, suggestAlternatives);


export default aiRouter;
