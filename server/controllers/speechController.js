// server/controllers/speechController.js
const speechService = require('../services/speechService');

const speechToText = async (req, res) => {
  const transcript = await speechService.speechToText(req.body.audio);
  res.json({ transcript });
};

const translateText = async (req, res) => {
  const translatedText = await speechService.translateText(req.body.text, req.body.targetLanguage);
  res.json({ translatedText });
};

const textToSpeech = async (req, res) => {
  const audioUrl = await speechService.textToSpeech(req.body.text);
  res.json({ audioUrl });
};

module.exports = { speechToText, translateText, textToSpeech };
