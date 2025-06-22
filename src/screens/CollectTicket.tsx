// src/screens/CollectTicket.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';

export default function CollectTicket() {
  const handleCollect = () => {
    // TODO: Logic to collect/cancel ticket
    console.log('Collecting ticket...');
  };

  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Collect Ticket</Text>
        <Button title="Collect" onPress={handleCollect} />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 20 },
});
