// components/ui/Home.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Home: React.FC = () => {
  const router = useRouter();
  const scheme = useColorScheme();
  const theme = scheme === 'dark'
    ? { background: '#121212', card: '#1E88E5', text: '#FFFFFF' }
    : { background: '#F8F9FA', card: '#1976D2', text: '#FFFFFF' };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.card }]}
        onPress={() => router.push('/generate-ticket')}
      >
        <FontAwesome5 name="plus-circle" size={24} color={theme.text} />
        <Text style={[styles.buttonText, { color: theme.text }]}>Generate Ticket</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.card }]}
        onPress={() => router.push('/collect-ticket')}
      >
        <FontAwesome5 name="money-bill-wave" size={24} color={theme.text} />
        <Text style={[styles.buttonText, { color: theme.text }]}>Collect Ticket</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.card }]}
        onPress={() => router.push('/ticket-history')}
      >
        <FontAwesome5 name="history" size={24} color={theme.text} />
        <Text style={[styles.buttonText, { color: theme.text }]}>Ticket History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 2,
  },
  buttonText: { fontSize: 16, fontWeight: '600' },
});

export default Home;
