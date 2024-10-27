// client/screens/SpeakScreen.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import LanguageSelector from '../components/LanguageSelector';
import SpeechButton from '../components/SpeechButton';
import AudioSpectrum from '../components/AudioSpectrum';
import { getSpeechToText, translateText, textToSpeech } from '../services/api';
import commonStyles from '../styles/commonStyles';

const SpeakScreen = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [outputLanguage, setOutputLanguage] = useState('tr');

  const handleSpeechToText = async () => {
    const transcript = await getSpeechToText();
    setInputText(transcript);
  };

  const handleTranslate = async () => {
    const translation = await translateText(inputText, outputLanguage);
    setTranslatedText(translation);
  };

  const handleTextToSpeech = async () => {
    await textToSpeech(translatedText);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LanguageSelector
        selectedLanguage={selectedLanguage}
        onSelectLanguage={setSelectedLanguage}
        languages={[
          { code: 'en', label: 'English' },
          { code: 'tr', label: 'Turkish' },
        ]}
      />
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Enter text or press Speak"
      />
      <SpeechButton onPress={handleSpeechToText} />
      <AudioSpectrum />
      <Button title="Translate" onPress={handleTranslate} />
      <Text style={styles.translatedText}>Translated: {translatedText}</Text>
      <Button title="Play Translation" onPress={handleTextToSpeech} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { ...commonStyles.input, marginBottom: 10 },
  translatedText: { fontSize: 16, marginVertical: 20, textAlign: 'center' }
});

export default SpeakScreen;
