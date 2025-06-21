
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '@/components/ui/Header';
import Home from '@/components/ui/Home';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Home />
      {/* Future content like ticket generation, history, etc. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
});
