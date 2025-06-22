// src/screens/Home.tsx
import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenLayout from '../components/ScreenLayout';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScreenLayout>
      <Button title="Generate Ticket" onPress={() => navigation.navigate('GenerateTicket')} />
      <Button title="Cancel Ticket" onPress={() => navigation.navigate('CancelTicket')} />
      <Button title="Ticket History" onPress={() => navigation.navigate('TicketHistory')} />
    </ScreenLayout>
  );
}
