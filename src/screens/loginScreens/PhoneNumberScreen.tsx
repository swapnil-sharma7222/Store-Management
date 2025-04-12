// src/screens/PhoneNumberScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';

type PhoneNumberScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PhoneNumber'
>;

const PhoneNumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation<PhoneNumberScreenNavigationProp>();

  const handleNext = () => {
    // You can add validation for the phone number here if needed
    navigation.navigate('OTPVerification', { phoneNumber });
  };

  return (
    <View className="flex-1 justify-center items-center bg-transparent px-4">
      <Text className="text-xl font-bold mb-4">Enter Your Phone Number</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        className="w-full border border-gray-300 p-3 rounded mb-4"
      />
      <TouchableOpacity
        onPress={handleNext}
        className="bg-blue-500 p-3 rounded w-full items-center"
      >
        <Text className="text-white font-semibold">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PhoneNumberScreen;
