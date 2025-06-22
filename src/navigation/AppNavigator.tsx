// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import AboutUs from '../screens/AboutUs';
// import GenerateTicket from '../screens/GenerateTicket';
// import CancelTicket from '../screens/CancelTicket';
// import TicketHistory from '../screens/TicketHistory';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from '../context/ThemeContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={Home} />
      {/* <Stack.Screen name="GenerateTicket" component={GenerateTicket} />
      <Stack.Screen name="CancelTicket" component={CancelTicket} />
      <Stack.Screen name="TicketHistory" component={TicketHistory} /> */}
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: theme.buttonText,
          tabBarInactiveTintColor: '#d1cdcd',
          tabBarStyle: {
            backgroundColor: theme.card,
            borderTopWidth: 0.5,
            borderTopColor: '#ccc',
            height: 60,
          },
          tabBarIcon: ({ color, focused }) => {
            let iconName = route.name === 'Home' ? 'home' : 'info-circle';
            return <Icon name={iconName} size={22} color={color} style={{ opacity: focused ? 1 : 0.75 }}/>;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="About Us" component={AboutUs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
