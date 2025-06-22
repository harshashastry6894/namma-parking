// src/screens/TicketHistory.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ScreenLayout from '../components/ScreenLayout';

const dummyTickets = [
  { id: '1', title: 'KA-01-AB-1234 - 22 June 2025, 10:00AM' },
  { id: '2', title: 'KA-05-CD-5678 - 21 June 2025, 6:15PM' },
];

export default function TicketHistory() {
  return (
    <ScreenLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Ticket History</Text>
        <FlatList
          data={dummyTickets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        />
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 20 },
  item: { fontSize: 16, paddingVertical: 8, borderBottomWidth: 0.5, borderColor: '#ccc' },
});
