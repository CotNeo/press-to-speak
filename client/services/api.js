// client/services/api.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getSpeechToText = async () => {
  const response = await api.post('/speech-to-text');
  return response.data.transcript;
};

export const translateText = async (text, targetLanguage) => {
  const response = await api.post('/translate', { text, targetLanguage });
  return response.data.translatedText;
};

export const textToSpeech = async (text) => {
  const response = await api.post('/text-to-speech', { text });
  return response.data.audioUrl;
};

export default api;
