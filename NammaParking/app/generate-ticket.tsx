// screens/GenerateTicket.tsx
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, useColorScheme } from 'react-native';

const GenerateTicket: React.FC = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#121212' : '#F8F9FA' }]}>
      <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Vehicle Number</Text>
      <TextInput
        placeholder="KA-01-AB-1234"
        placeholderTextColor={isDark ? '#aaa' : '#666'}
        style={[
          styles.input,
          {
            backgroundColor: isDark ? '#1e1e1e' : '#fff',
            color: isDark ? '#fff' : '#000',
            borderColor: isDark ? '#555' : '#ccc',
          },
        ]}
      />

      <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Slot Number</Text>
      <TextInput
        placeholder="A1"
        placeholderTextColor={isDark ? '#aaa' : '#666'}
        style={[
          styles.input,
          {
            backgroundColor: isDark ? '#1e1e1e' : '#fff',
            color: isDark ? '#fff' : '#000',
            borderColor: isDark ? '#555' : '#ccc',
          },
        ]}
      />

      <Button title="Generate Ticket" onPress={() => { /* handle submission */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
});

export default GenerateTicket;
