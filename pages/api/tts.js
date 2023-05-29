const textToSpeech = require('@google-cloud/text-to-speech');

require('dotenv').config();

const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient();

module.exports = {
    convertTextToMp3: async function (text) {
        // text = "Welcome to our hyper-immersive narrative guide to the bustling and vibrant Farmers Market! Today, we invite you to embark on a delightful journey through a sensory wonderland filled with families, young children, and even furry companions. So, let's dive right in!\
        // As we step into this vibrant space, take a deep breath and savor the aroma of freshly baked goods, the earthy scent of ripe fruits, and the aromatic spices that fill the air. Look around, and you'll notice families strolling hand in hand, their faces adorned with joy and excitement. The market is alive with colors, a kaleidoscope of vibrant produce, blooming flowers, and handmade crafts that decorate each booth.\
        // Did you know that farmers markets have been around for centuries? In ancient civilizations, traders would gather in open spaces to exchange goods and forge new connections. Today, these markets have transformed into community hubs, showcasing the rich tapestry of local cultures and providing a direct link between producers and consumers.\
        // Listen carefully, and you'll hear the delighted laughter of children playing and the happy barks of dogs joining in the festivities. Farmers markets offer a unique opportunity for families to educate their children about the importance of fresh, locally grown food and sustainable farming practices. It's a wonderful chance for the little ones to learn where their meals come from and engage with the farmers who pour their hearts into cultivating these nourishing delights.\
        // As we stroll through the market, be sure to stop by the artisanal cheese booth. Did you know that cheese-making dates back thousands of years? Ancient civilizations, like the Egyptians and the Greeks, were known for their love of cheese. Today, local cheese makers continue to craft delectable varieties, using age-old techniques passed down through generations.\
        // Oh, and here's a fascinating tidbit! Do you see that towering sunflower over there? Sunflowers not only brighten our spirits with their vibrant yellow petals, but did you know that they were once used by Native American tribes for their medicinal properties? The seeds were ground into flour, providing a rich source of nutrients.\
        // Before we conclude our tour, make sure to treat yourself to a freshly squeezed juice or perhaps a deliciously fluffy pastry. Indulge in the flavors that have been lovingly prepared by local artisans who pour their passion into every bite.\
        // As our time together draws to a close, we hope you've enjoyed this immersive journey through the Farmers Market. Remember, this vibrant place isn't just about food and crafts; it's a celebration of community, sustainability, and the simple pleasures of life. So, next time you visit, immerse yourself in the bustling atmosphere, and let your senses guide you through this cornucopia of flavors, scents, and experiences.\
        // Thank you for joining us on this magical adventure, and we hope to see you again soon!"
        const request = {
            input:{text:text},
            voice:{languageCode:'en-gb', name:'en-GB-Standard-A', ssmlGender:'FEMALE'},
            audioConfig:{audioEncoding:'MP3'}
        };

        const [response] = await client.synthesizeSpeech(request);



        const writeFile = util.promisify(fs.writeFile);
        await writeFile("media/output.mp3", response.audioContent, "binary");

        console.log("Audio file has been successfully generated");
        // return response;
    }
};

