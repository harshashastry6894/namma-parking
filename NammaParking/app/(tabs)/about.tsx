import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from '@/constants/Theme';

export default function AboutUs() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.text, { color: theme.text }]}>Namma Parking - About Us</Text>
      <Text style={[styles.subText, { color: theme.text }]}>
        We are dedicated to making parking easier and smarter with a simple mobile solution.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
