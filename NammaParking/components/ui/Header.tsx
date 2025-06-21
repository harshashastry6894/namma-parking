// components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Namma Parking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1976D2', // Updated blue color
    paddingTop: 70,
    paddingBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    color: '#FFFFFF', // White text
    fontSize: 26,
    fontWeight: '600',
  },
});

export default Header;
