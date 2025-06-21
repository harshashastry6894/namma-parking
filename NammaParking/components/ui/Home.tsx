import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { lightTheme, darkTheme } from '@/constants/Theme';

const Home: React.FC = () => {
  const router = useRouter();
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.card }]}
        onPress={() => router.push('/generate-ticket')}
      >
        <FontAwesome5 name="plus-circle" size={24} color={theme.buttonText} />
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Generate Ticket</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.card }]}
        onPress={() => router.push('/collect-ticket')}
      >
        <FontAwesome5 name="money-bill-wave" size={24} color={theme.buttonText} />
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Collect Ticket</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.card }]}
        onPress={() => router.push('/ticket-history')}
      >
        <FontAwesome5 name="history" size={24} color={theme.buttonText} />
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Ticket History</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 60
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 2,
    width: 250,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Home;
