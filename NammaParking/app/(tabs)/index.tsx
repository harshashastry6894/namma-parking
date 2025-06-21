import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '@/components/ui/Header';
import Home from '@/components/ui/Home';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Home />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
