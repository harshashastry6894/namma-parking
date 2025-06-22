// src/components/ScreenLayout.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import { useTheme } from '../context/ThemeContext';

type Props = {
  children: React.ReactNode;
};

const ScreenLayout = ({ children }: Props) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default ScreenLayout;
