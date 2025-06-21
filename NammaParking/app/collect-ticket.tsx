// screens/CollectTicket.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, useColorScheme } from 'react-native';

const CollectTicket: React.FC = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#121212' : '#F8F9FA' }]}>
      <Text style={[styles.text, { color: isDark ? '#fff' : '#000' }]}>
        Scan or enter ticket number to collect amount.
      </Text>
      <Button title="Collect Amount" onPress={() => { /* handle collection */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default CollectTicket;
