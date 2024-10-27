// client/screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Profile</Text>
    <Text>Member ID: 12345</Text>
    <Text>Subscription Level: Premium</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }
});

export default ProfileScreen;
