import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Namma Parking</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('GenerateTicket')}
      >
        <Text style={styles.buttonText}>Generate Ticket</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 26, marginBottom: 20 },
  button: {
    backgroundColor: '#1976D2',
    padding: 12,
    borderRadius: 6,
  },
  buttonText: { color: '#fff' },
});
