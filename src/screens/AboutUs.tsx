// src/screens/AboutUs.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';
import Header from '../components/Header';
import { useTheme } from '../context/ThemeContext';

export default function AboutUs() {
  const theme = useTheme();

  const openEmail = () => Linking.openURL('mailto:support@nmmaparking.com');
  const openPhone = () => Linking.openURL('tel:+918040404040');

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.title, { color: theme.text }]}>About Namma Parking</Text>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: theme.text }]}>🚗 Our Mission</Text>
          <Text style={[styles.text, { color: theme.text }]}>
            We aim to transform parking by providing a smart, seamless digital experience
            that eliminates hassle and saves time.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: theme.text }]}>👥 Who We Are</Text>
          <Text style={[styles.text, { color: theme.text }]}>
            Namma Parking is a Bengaluru-based parking solution provider focused on
            digitizing parking operations. We work with local authorities and private
            operators to enable efficient parking through mobile-first technology.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={[styles.heading, { color: theme.text }]}>ℹ️ Contact Us</Text>
          <View style={styles.contactInfo}>
            <Text style={[styles.link, { color: theme.text }]} onPress={openEmail}>
              📧 support@nmmaparking.com
            </Text>
            <Text style={[styles.link, { color: theme.text }]} onPress={openPhone}>
              📞 +91 80404 04040
            </Text>
            <Text style={[styles.text, { color: theme.text }]}>
              🏢 3rd Floor, TechPark Towers, MG Road, Bengaluru - 560001
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',
    marginBottom: 10,
    textAlign: 'left', // 👈 cleaner for mobile
    letterSpacing: 0.25,
  },
  link: {
    fontSize: 15,
    lineHeight: 22,
    color: '#007AFF',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
  contactInfo: {
    paddingLeft: 8,
  },
});

