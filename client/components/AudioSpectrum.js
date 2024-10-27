// client/components/AudioSpectrum.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const AudioSpectrum = () => (
  <View style={styles.spectrumContainer}>
    {/* Bu alan dinamik olarak ses dalgalarını göstermek için kullanılacak */}
    <View style={[styles.bar, { height: Math.random() * 100 }]} />
    <View style={[styles.bar, { height: Math.random() * 100 }]} />
    <View style={[styles.bar, { height: Math.random() * 100 }]} />
    <View style={[styles.bar, { height: Math.random() * 100 }]} />
    <View style={[styles.bar, { height: Math.random() * 100 }]} />
  </View>
);

const styles = StyleSheet.create({
  spectrumContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  bar: {
    width: 10,
    backgroundColor: '#4CAF50',
    marginHorizontal: 2,
  },
});

export default AudioSpectrum;
