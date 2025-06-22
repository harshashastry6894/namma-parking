import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
// import GenerateTicket from '../screens/GenerateTicket';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="GenerateTicket" component={GenerateTicket} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
