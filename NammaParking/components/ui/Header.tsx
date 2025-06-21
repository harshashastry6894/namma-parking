// components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="parking" size={28} color="#FFFFFF" style={styles.icon} />
      <Text style={styles.title}>Namma Parking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1976D2',
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
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '600',
  },
});

export default Header;
