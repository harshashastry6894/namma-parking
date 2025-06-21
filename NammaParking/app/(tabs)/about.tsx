import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  useColorScheme,
} from 'react-native';
import Header from '@/components/ui/Header';
import { lightTheme, darkTheme } from '@/constants/Theme';

export default function AboutUs() {
  const scheme = useColorScheme() ?? 'light';
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

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
    padding: 24,
    paddingBottom: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 10,
    textAlign: 'justify',
    letterSpacing: 0.5,
    paddingHorizontal: 4,
  },
  link: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 10
  },
  contactInfo: {
    paddingLeft: 12,
  },
});
