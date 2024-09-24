// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// export const suggestAlternatives = async (req, res) => {
//   const { likedMovies, dislikedMovies } = req.body;

//   const prompt = `Here are some movies that people liked: ${likedMovies}. Here are some that they disliked: ${dislikedMovies}. Can you recommend similar movies to the liked ones but different from the disliked ones?`;

//   try {
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt,
//       max_tokens: 100,
//     });

//     res.status(200).json({ suggestions: response.data.choices[0].text });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const prisma = require('../prisma');  // Suponiendo que usas Prisma

const getRecommendations = async (req, res) => {
  const { eventId } = req.params;
  const { category } = req.body;  // Puede ser 'movies', 'places' o 'meals'
  
  let likedItems = [];
  let dislikedItems = [];

  if (category === 'movies') {
    likedItems = await prisma.usersLikedMovies.findMany({ where: { eventId } });
    dislikedItems = await prisma.usersDislikedMovies.findMany({ where: { eventId } });
  } else if (category === 'places') {
    likedItems = await prisma.usersLikedPlaces.findMany({ where: { eventId } });
    dislikedItems = await prisma.usersDislikedPlaces.findMany({ where: { eventId } });
  } else if (category === 'meals') {
    likedItems = await prisma.usersLikedMeals.findMany({ where: { eventId } });
    dislikedItems = await prisma.usersDislikedMeals.findMany({ where: { eventId } });
  }

  const likedNames = likedItems.map(item => item.name).join(', ');
  const dislikedNames = dislikedItems.map(item => item.name).join(', ');

  const prompt = `Here are some ${category} that people liked: ${likedNames}. Here are some that they disliked: ${dislikedNames}. Can you recommend similar ${category} to the liked ones but different from the disliked ones?`;

  try {
    const gptResponse = await openai.complete({
      engine: 'davinci',
      prompt,
      maxTokens: 150
    });

    const recommendations = gptResponse.data.choices[0].text.trim();
    res.json({ recommendations });
  } catch (error) {
    res.status(500).json({ error: 'Error generating recommendations' });
  }

  return{
    getRecommendations
  }
};
