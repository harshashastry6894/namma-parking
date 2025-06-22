// src/components/ScreenLayout.tsx
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from './Header';
import { useTheme } from '../context/ThemeContext';

type Props = {
  children: React.ReactNode;
};

const ScreenLayout = ({ children }: Props) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <Header />
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default ScreenLayout;
