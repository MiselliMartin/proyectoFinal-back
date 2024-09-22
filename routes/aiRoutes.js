import express from 'express';
import { suggestAlternatives } from '../controllers/aiController.js';

const router = express.Router();

router.post('/suggestions', suggestAlternatives);

export default router;
