// server/utils/validators.js
const isValidText = (text) => typeof text === 'string' && text.trim().length > 0;

module.exports = { isValidText };
