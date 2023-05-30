import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Extract the image file from the request body
    const imageFile = req.files.image;

    // Convert the image file to base64 encoding
    const image = imageFile.data.toString('base64');

    // Set the model and version information
    const model = 'pharmapsychotic/clip-interrogator';
    const version = 'a4a8bafd6089e1716b06057c42b19378250d008b80fe87caa5cd36d40c1eda90';

    // Prepare the inputs for the model
    const inputs = {
      image,
      clip_model_name: 'ViT-L-14/openai',
      mode: 'fast',
    };

    // Make a request to the Replicate API to generate the description based on the image
    const replicateResponse = await axios.post(
      `https://api.replicate.ai/models/${model}/${version}/predict`,
      inputs,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REPLICATE_API_KEY}`,
        },
      }
    );

    // Extract the generated description from the Replicate response
    const generatedDescription = replicateResponse.data.description;

    // Set the prompt for the GPT-3 model
    const prompt = `Given the following prompt, describe it to a blind person poetically as if he is watching the scene around him and do not infer: ${generatedDescription}`;

    // Make a request to the OpenAI API to generate a poetic description based on the initial description
    const gptResponse = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-002/completions',
      {
        prompt,
        max_tokens: 2000,
        n: 1,
        stop: null,
        temperature: 0.3,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    // Extract the generated poetic description from the GPT-3 response
    const gptDescription = gptResponse.data.choices[0].text.trim();

    // Return the generated description in the response
    res.status(200).json({ description: gptDescription });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate description' });
  }
}