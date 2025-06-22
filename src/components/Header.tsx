// components/Header.tsx
import React from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { lightTheme, darkTheme } from '../constants/theme'; // adjust path

const Header: React.FC = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.card }]}>
      <Icon name="parking" size={22} color={theme.buttonText} style={styles.icon} />
      <Text style={[styles.title, { color: theme.buttonText }]}>Namma Parking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Header;
