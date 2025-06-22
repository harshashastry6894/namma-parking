// src/screens/Home.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScreenLayout from '../components/ScreenLayout';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '../context/ThemeContext';

export default function Home() {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <ScreenLayout>
      <View style={styles.container}>
        <CustomButton
          label="Generate Ticket"
          icon="ticket-alt"
          onPress={() => navigation.navigate('GenerateTicket')}
          themeColor={theme}
        />
        <CustomButton
          label="Collect Ticket"
          icon="cash-register"
          onPress={() => navigation.navigate('CollectTicket')} // You can rename this screen if needed
          themeColor={theme}
        />
        <CustomButton
          label="Ticket History"
          icon="history"
          onPress={() => navigation.navigate('TicketHistory')}
          themeColor={theme}
        />
      </View>
    </ScreenLayout>
  );
}

type ButtonProps = {
  label: string;
  icon: string;
  onPress: () => void;
  themeColor: ReturnType<typeof useTheme>;
};

const CustomButton = ({ label, icon, onPress, themeColor }: ButtonProps) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: themeColor.button }]}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Icon name={icon} size={18} color={themeColor.buttonText} style={styles.icon} />
    <Text style={[styles.label, { color: themeColor.buttonText }]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    minWidth: 250,
    justifyContent: 'center',
    elevation: 3,
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
