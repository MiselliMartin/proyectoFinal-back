import express from 'express';
import bodyParser from 'body-parser';
import { suggestAlternatives } from './controllers/aiController.js';

const app = express();
app.use(bodyParser.json());

// Rutas
app.post('/api/ai/suggestions', suggestAlternatives);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
