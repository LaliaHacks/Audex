export default function handler(req, res) {
    // Modify the request query parameter
    const { text } = req.body;

    // Use the text value as needed
    console.log(text);
    const tool = require('./tts')
    const re = tool.convertTextToMp3(text);
  
    // Proceed with your custom logic or response handling
    // ...
    res.status(200).json({ message: 'Request parameter modified successfully' });
    // res.setHeader('Content-Disposition', 'attachment; filename="bob.mp3"');

    // res.setHeader('Content-Type', 'audio/mpeg');
    // re.audioContent.pipe(res);

}
