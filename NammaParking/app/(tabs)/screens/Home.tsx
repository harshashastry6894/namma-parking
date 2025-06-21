import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { lightTheme, darkTheme } from '@/constants/Theme';

const Home = () => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableOpacity style={[styles.button, { backgroundColor: theme.card }]}>
        <FontAwesome5 name="plus-circle" size={32} color={theme.text} />
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Generate Ticket</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.card }]}>
        <FontAwesome5 name="money-bill-wave" size={32} color={theme.text} />
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Collect Ticket</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: theme.card }]}>
        <FontAwesome5 name="history" size={32} color={theme.text} />
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Ticket History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 16,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Home;
