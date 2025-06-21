// screens/TicketHistory.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, useColorScheme } from 'react-native';

const dummyTickets = [
  { id: '1', vehicle: 'KA-01-AB-1234', date: '2024-06-01' },
  { id: '2', vehicle: 'KA-02-CD-5678', date: '2024-06-02' },
  { id: '3', vehicle: 'KA-03-EF-9101', date: '2024-06-03' },
];

const TicketHistory: React.FC = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#121212' : '#F8F9FA' }]}>
      <FlatList
        data={dummyTickets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: isDark ? '#1e1e1e' : '#fff' }]}>
            <Text style={[styles.text, { color: isDark ? '#fff' : '#000' }]}>
              {item.vehicle}
            </Text>
            <Text style={{ color: isDark ? '#aaa' : '#555' }}>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default TicketHistory;
