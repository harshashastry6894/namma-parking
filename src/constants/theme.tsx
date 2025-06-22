// src/constants/theme.ts

export type Theme = {
  background: string;
  text: string;
  card: string;
  button: string;
  buttonText: string;
};

export const lightTheme: Theme = {
  background: '#F8F9FA',     // Light neutral background
  card: '#1976D2',           // Deep blue card/header
  text: '#000000',           // Dark text for readability
  button: '#1976D2',         // Primary button color
  buttonText: '#FFFFFF',     // White text for contrast on buttons
};

export const darkTheme: Theme = {
  background: '#121212',     // Deep dark background
  card: '#1E88E5',           // Slightly lighter blue for contrast
  text: '#FFFFFF',           // Bright text
  button: '#1E88E5',         // Primary button color for dark mode
  buttonText: '#FFFFFF',     // Button text stays white
};
