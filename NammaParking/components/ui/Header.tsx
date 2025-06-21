// components/Header.tsx
import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { lightTheme, darkTheme } from '@/constants/Theme';

const Header: React.FC = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.card }]}>
      <FontAwesome5 name="parking" size={28} color={theme.buttonText} style={styles.icon} />
      <Text style={[styles.title, { color: theme.buttonText }]}>Namma Parking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
  },
});

export default Header;
