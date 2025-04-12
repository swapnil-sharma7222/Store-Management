// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneNumberScreen from '../screens/loginScreens/PhoneNumberScreen';
import OTPVerificationScreen from '../screens/loginScreens/OTPVerificationScreen';
import UserDetailsStep1 from '../screens/loginScreens/UserDetailsStep1';
import UserDetailsStep2 from '../screens/loginScreens/UserDetailsStep2';

export type RootStackParamList = {
  PhoneNumber: undefined;
  OTPVerification: { phoneNumber: string };
  UserDetailsStep1: undefined;
  UserDetailsStep2: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator id={undefined} initialRouteName="PhoneNumber">
      <Stack.Screen 
        name="PhoneNumber" 
        component={PhoneNumberScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="OTPVerification" 
        component={OTPVerificationScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="UserDetailsStep1" 
        component={UserDetailsStep1} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="UserDetailsStep2" 
        component={UserDetailsStep2} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
