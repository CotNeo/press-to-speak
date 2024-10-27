// client/components/LanguageSelector.js
import React from 'react';
import { View, Picker, StyleSheet } from 'react-native';

const LanguageSelector = ({ selectedLanguage, onSelectLanguage, languages }) => (
  <View style={styles.container}>
    <Picker selectedValue={selectedLanguage} onValueChange={onSelectLanguage}>
      {languages.map((language) => (
        <Picker.Item key={language.code} label={language.label} value={language.code} />
      ))}
    </Picker>
  </View>
);

const styles = StyleSheet.create({
  container: { margin: 10 }
});

export default LanguageSelector;
