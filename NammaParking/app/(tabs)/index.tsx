
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '@/components/ui/Header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
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
