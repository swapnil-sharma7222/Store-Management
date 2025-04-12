// src/screens/UserDetailsStep2.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';

type UserDetailsStep2NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UserDetailsStep2'
>;

const UserDetailsStep2 = () => {
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const navigation = useNavigation<UserDetailsStep2NavigationProp>();

  const handleNext = () => {
    // At this point, you could either submit the details or navigate to a third step if needed.
    // For now, we'll simply log the values.
    console.log('Email:', email, 'Address:', address);
    // You can navigate further if you add another step.
  };

  return (
    <View className="flex-1 justify-center items-center bg-transparent px-4">
      <Text className="text-xl font-bold mb-4">User Details - Step 2</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        className="w-full border border-gray-300 p-3 rounded mb-4"
      />
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
        className="w-full border border-gray-300 p-3 rounded mb-4"
      />
      <TouchableOpacity
        onPress={handleNext}
        className="bg-orange-500 p-3 rounded w-full items-center"
      >
        <Text className="text-white font-semibold">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserDetailsStep2;
