// src/screens/GenerateTicket.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';
import Header from '../components/Header';

export default function GenerateTicket() {
  const handleGenerate = () => {
    // TODO: Logic to generate ticket and save to DB or file
    console.log('Generating ticket...');
  };

  return (
    <ScreenLayout showBackButton>
      <View style={styles.container}>
        <Text style={styles.title}>Generate Ticket</Text>
        <Button title="Generate" onPress={handleGenerate} />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 20 },
});
