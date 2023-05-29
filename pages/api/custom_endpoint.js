export default function handler(req, res) {
    // Modify the request query parameter
    const { text } = req.body;

    // Use the text value as needed
    console.log(text);
    const tool = require('./tts')
    tool.convertTextToMp3(text);
    res.status(200).json({ message: 'Request parameter modified successfully' });

}
