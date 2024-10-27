// client/components/SpeechButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SpeechButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>Speak</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 8 },
  text: { color: '#FFF', fontSize: 18, textAlign: 'center' }
});

export default SpeechButton;
