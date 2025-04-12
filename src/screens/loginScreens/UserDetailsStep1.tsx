// src/screens/UserDetailsStep1.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';

type UserDetailsStep1NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UserDetailsStep1'
>;

const UserDetailsStep1 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigation = useNavigation<UserDetailsStep1NavigationProp>();

  const handleNext = () => {
    // You can add validation for the details here if needed
    navigation.navigate('UserDetailsStep2');
  };

  return (
    <View className="flex-1 justify-center items-center bg-transparent px-4">
      <Text className="text-xl font-bold mb-4">User Details - Step 1</Text>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
        className="w-full border border-gray-300 p-3 rounded mb-4"
      />
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
        className="w-full border border-gray-300 p-3 rounded mb-4"
      />
      <TouchableOpacity
        onPress={handleNext}
        className="bg-purple-500 p-3 rounded w-full items-center"
      >
        <Text className="text-white font-semibold">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserDetailsStep1;
