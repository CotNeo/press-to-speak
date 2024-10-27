// server/routes/speechRoutes.js
const express = require('express');
const { speechToText, translateText, textToSpeech } = require('../controllers/speechController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/speech-to-text', authMiddleware, speechToText);
router.post('/translate', authMiddleware, translateText);
router.post('/text-to-speech', authMiddleware, textToSpeech);

module.exports = router;
