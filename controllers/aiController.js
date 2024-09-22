import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const suggestAlternatives = async (req, res) => {
  const { preference } = req.body;

  const prompt = `A los usuarios no les gustó la película, la comida o el lugar elegido. Sugerir alternativas basadas en ${preference}.`;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 100,
    });

    res.status(200).json({ suggestions: response.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
