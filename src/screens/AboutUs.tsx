// src/screens/AboutUs.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';

export default function AboutUs() {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text style={styles.text}>Namma Parking is a smart parking solution to manage parking tickets and history efficiently.</Text>
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});
