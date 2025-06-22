export type Theme = {
  background: string;
  text: string;
  card: string;
  button: string;
  buttonText: string;
};

export const lightTheme: Theme = {
  background: '#F8F9FA',
  card: '#1976D2',
  text: '#000',
  buttonText: '#FFFFFF',
  button: '#1976D2',
};

export const darkTheme: Theme = {
  background: '#121212',
  card: '#1E88E5',
  text: '#FFFFFF',
  buttonText: '#FFFFFF',
  button: '#1E88E5',
};
