# Audex: Immerse yourself anywhere

<div align="center">
  <img src="./public/mainIcon.png" alt="Audex Main Icon" width="280">
</div>

<div align="center">Enhancing the human experience with an extra dimension of audio sensory stimulation</div>

<p align="center">
  <a href="https://audex.vercel.app">Live Demo</a>
</p>

## Inspiration

We were inspired by the hyper-immersive experiences that teamLab offers. Our goal is to provide users with out-of-world experiences right from their pockets and enhance their post-covid adventures.

## What it does

Audex offers a truly unique audio experience that consists of two components, meticulously crafted to provide an unforgettable journey:

**Real-Time Descriptions by Advanced Language Models:** Prepare to be enthralled as Audex generates detailed and enthralling descriptions in real-time, utilizing some of the world's most advanced large language models (LLMs). These cutting-edge models ensure that every description is vivid, engaging, and tailored to the specific location, enriching your travel experience like never before.

**Fascinating Factual Insights:** In addition to the immersive descriptions, Audex also provides a factual component that shares intriguing facts about the location you're exploring. These facts could encompass historical significance, geographical wonders, or simply fun trivia, deepening your understanding and appreciation of each destination.

## How we built it

We built our platform using NextJS and some handy APIs: OpenAI Text Generation API, CLIP Interrogator API, Google Cloud Text-to-Speech API. We first set up our web app to take in an image from users. These images were then passed into the CLIP API to generate descriptions of the image and its contents. This content was then passed into the OpenAI API to add in facts about possible landmarks or location details in the image. Lastly, the OpenAI generated transcript is passed to the Text-to-Speech API to generate playable audio for the users to listen to and enjoy!

## Challenges we ran into

Finding a good image-to-text API was difficult so we switched to using an intermediate API (CLIP) to first generate image descriptions that could then be expanded on using OpenAI's GPT API. Figuring out storage solutions for the generated content was a challenge. We originally planned to host the product but realizing that we would not be able to set up a database in the short period of time, we decided to not host the site and instead use local storage.

## Accomplishments that we're proud of

- Connecting the different APIs together, to ultimately produce a functional and effective product.
- Figuring out how to use each API within the short period of time.
- Balancing regular internship work together with working on this project.

## What we learned

- Crafting aesthetic and user-friendly interfaces.
- How to leverage existing APIs to boost our product.
- What to focus on when building a product in a short time frame.

## What's next for Audex

We plan to work towards hosting our product on a live site. To do so we will be setting up a proper backend with connections to secure and fast databases that allow for hosting of the generated content. We'll also be working on prompt engineering, to enhance the results that we can get from the OpenAI API. Once we have a more refined product, we plan to reach out to our local tourism board and national parks boards, to explore possible ways in which we could add value to their offerings through Audex.

## Built With

- clip-api
- google-cloud-text-to-speech-api
- nextjs
- openai-api
- tailwind-css
- vercel
