import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTheme } from '../context/ThemeContext';
import ScreenLayout from '../components/ScreenLayout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

type VehicleTypeOption = {
  label: string;
  value: string;
  icon: string;
  hourly: number;
  fixed: number;
};

const vehicleTypes: VehicleTypeOption[] = [
  {
    label: '2 Wheeler (₹10/hr, ₹20 fixed)',
    value: 'two',
    icon: 'motorbike',
    hourly: 10,
    fixed: 20,
  },
  {
    label: 'Car (₹20/hr, ₹80 fixed)',
    value: 'car',
    icon: 'car',
    hourly: 20,
    fixed: 80,
  },
  {
    label: 'Auto (₹20/hr, ₹40 fixed)',
    value: 'auto',
    icon: 'rickshaw',
    hourly: 20,
    fixed: 40,
  },
  {
    label: 'Trax (₹75/hr, ₹100 fixed)',
    value: 'trax',
    icon: 'truck',
    hourly: 75,
    fixed: 100,
  },
];

export default function GenerateTicket() {
  const theme = useTheme();

  const [vehicleTypeOpen, setVehicleTypeOpen] = useState(false);
  const [vehicleType, setVehicleType] = useState('two');
  const [parkingLotOpen, setParkingLotOpen] = useState(false);
  const [parkingLot, setParkingLot] = useState<number | null>(null);
  const [vehicleNumber, setVehicleNumber] = useState('');

  const checkInTime = moment().format('hh:mm A');

  const isValidVehicleNumber = (num: string) => {
    const regex = /^[A-Z]{2}\d{1,2}[A-Z]{1,2}\d{4}$/; // KA01AB1234
    return regex.test(num.toUpperCase());
  };

  const handleGenerate = () => {
    if (!vehicleNumber || !isValidVehicleNumber(vehicleNumber)) {
      Alert.alert(
        'Invalid Vehicle Number',
        'Enter a valid number like KA01AB1234',
      );
      return;
    }

    if (!parkingLot) {
      Alert.alert('Select Parking Lot');
      return;
    }

    const selected = vehicleTypes.find(v => v.value === vehicleType);
    Alert.alert(
      'Ticket Details',
      `
Vehicle Type: ${selected?.label}
Parking Lot: ${parkingLot}
Check-in Time: ${checkInTime}
Vehicle Number: ${vehicleNumber.toUpperCase()}
Hourly: ₹${selected?.hourly}
Fixed: ₹${selected?.fixed}
      `,
    );
  };

  return (
    <ScreenLayout showBackButton>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={[styles.label, { color: theme.text }]}>
            Vehicle Type
          </Text>
          <View style={{ zIndex: 3000 }}>
            <DropDownPicker
              open={vehicleTypeOpen}
              setOpen={setVehicleTypeOpen}
              value={vehicleType}
              setValue={setVehicleType}
              items={vehicleTypes.map(v => ({
                label: v.label,
                value: v.value,
                icon: () => <Icon name={v.icon} size={20} color={theme.text} />,
              }))}
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainer}
              textStyle={{ color: theme.text }}
              zIndex={3000}
              zIndexInverse={1000}
            />
          </View>

          <Text style={[styles.label, { color: theme.text, marginTop: 20 }]}>
            Parking Lot
          </Text>
          <View style={{ zIndex: 2000 }}>
            <DropDownPicker
              open={parkingLotOpen}
              setOpen={setParkingLotOpen}
              value={parkingLot}
              setValue={setParkingLot}
              items={[1, 2, 3, 4, 5].map(i => ({
                label: `Lot ${i}`,
                value: i,
              }))}
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainer}
              textStyle={{ color: theme.text }}
              zIndex={2000}
              zIndexInverse={1000}
            />
          </View>

          <Text style={[styles.label, { color: theme.text, marginTop: 20 }]}>
            Check-in Time
          </Text>
          <TextInput
            style={[styles.input, { color: theme.text }]}
            value={checkInTime}
            editable={false}
          />

          <Text style={[styles.label, { color: theme.text, marginTop: 20 }]}>
            Vehicle Number
          </Text>
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="KA01AB1234"
            placeholderTextColor="#999"
            value={vehicleNumber}
            onChangeText={setVehicleNumber}
            autoCapitalize="characters"
          />

          <View style={{ marginTop: 30 }}>
            <Button
              title="Generate Ticket"
              onPress={handleGenerate}
              color={Platform.OS === 'ios' ? undefined : theme.button}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 16,
    paddingBottom: 80,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 6,
  },
  dropdown: {
    borderColor: '#ccc',
    backgroundColor: '#F4F4F4', // Neutral bg color instead of theme.card
  },
  dropdownContainer: {
    backgroundColor: '#F4F4F4',
    borderColor: '#ccc',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#F4F4F4',
  },
});
