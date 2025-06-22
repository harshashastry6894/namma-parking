// components/Header.tsx
import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';

type HeaderProps = {
  showBackButton?: boolean;
};

const Header: React.FC<HeaderProps> = ({ showBackButton = false }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: theme.card, shadowColor: theme.text }]}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={18} color={theme.text} />
        </TouchableOpacity>
      )}
      <Icon name="parking" size={24} color={theme.text} style={styles.icon} />
      <Text style={[styles.title, { color: theme.text }]}>Namma Parking</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 60 : 50,
    paddingBottom: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
    zIndex: 10,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: Platform.OS === 'ios' ? 62 : 52,
    padding: 8,
  },
});

export default Header;
