// components/Header.tsx
import React from 'react';
import { View, Text, StyleSheet, useColorScheme, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { lightTheme, darkTheme } from '../constants/theme'; // adjust path if needed

const Header: React.FC = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.card, shadowColor: theme.text }]}>
      <Icon name="parking" size={24} color={theme.buttonText} style={styles.icon} />
      <Text style={[styles.title, { color: theme.buttonText }]}>Namma Parking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 60 : 50,
    paddingBottom: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    zIndex: 10,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
});

export default Header;
