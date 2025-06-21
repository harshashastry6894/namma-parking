import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  useColorScheme,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {
  usePrintersDiscovery,
  Printer,
  PrinterConstants,
} from 'react-native-esc-pos-printer';

const GenerateTicket: React.FC = () => {
  const isDark = useColorScheme() === 'dark';
  const [vehicleNo, setVehicleNo] = useState('');
  const [slotNo, setSlotNo] = useState('');

  // Discover printers
  const { start, printers, isDiscovering, printerError } =
    usePrintersDiscovery();

  useEffect(() => {
    start({ timeout: 8000 });
  }, [start]);

  const handlePrint = async () => {
    if (!vehicleNo || !slotNo) {
      Alert.alert('Missing Info', 'Please enter both vehicle and slot numbers');
      return;
    }

    if (printers.length === 0) {
      Alert.alert('Printer Not Found', 'No printers discovered yet');
      return;
    }

    // Use first printer matching "shreyans"
    const p = printers.find((pr) =>
      pr.deviceName?.toLowerCase().includes('shreyans')
    );

    if (!p) {
      Alert.alert('Printer Not Found', 'Pair or turn on your printer');
      return;
    }

    const printer = new Printer({ target: p.target, deviceName: p.deviceName });

    try {
      await printer.addQueueTask(async () => {
        await Printer.tryToConnectUntil(printer, (st) => st.online.statusCode === PrinterConstants.TRUE);

        await printer.addText('*** Namma Parking ***\n');
        await printer.addText(`Vehicle No: ${vehicleNo}\n`);
        await printer.addText(`Slot No: ${slotNo}\n`);
        await printer.addText(`Date: ${new Date().toLocaleString()}\n`);
        await printer.addText('--------------------------\n');
        await printer.addText('Thank you!\n\n');
        await printer.addCut();

        const result = await printer.sendData();
        await printer.disconnect();
        return result;
      });

      Alert.alert('Success', 'Ticket printed successfully');
      setVehicleNo('');
      setSlotNo('');
    } catch (err: any) {
      console.error(err);
      Alert.alert('Print Error', err?.message || 'Failed to print');
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={[styles.container, { backgroundColor: isDark ? '#121212' : '#F8F9FA' }]}>
        <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Vehicle Number</Text>
        <TextInput
          placeholder="KA-01-AB-1234"
          placeholderTextColor={isDark ? '#888' : '#666'}
          value={vehicleNo}
          onChangeText={setVehicleNo}
          style={[
            styles.input,
            {
              backgroundColor: isDark ? '#1E1E1E' : '#fff',
              color: isDark ? '#fff' : '#000',
              borderColor: isDark ? '#555' : '#ccc',
            },
          ]}
        />

        <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Slot Number</Text>
        <TextInput
          placeholder="A1"
          placeholderTextColor={isDark ? '#888' : '#666'}
          value={slotNo}
          onChangeText={setSlotNo}
          style={[
            styles.input,
            {
              backgroundColor: isDark ? '#1E1E1E' : '#fff',
              color: isDark ? '#fff' : '#000',
              borderColor: isDark ? '#555' : '#ccc',
            },
          ]}
        />

        <Button title={isDiscovering ? 'Searching printers…' : 'Generate Ticket'} onPress={handlePrint} disabled={isDiscovering} />
        {printerError && <Text style={styles.error}>Error discovering printers: {printerError.message}</Text>}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, justifyContent: 'center' },
  label: { fontSize: 16, fontWeight: '600', marginBottom: 8 },
  input: { height: 50, borderWidth: 1, borderRadius: 8, paddingHorizontal: 12, marginBottom: 20 },
  error: { color: 'red', marginTop: 12, textAlign: 'center' },
});

export default GenerateTicket;
