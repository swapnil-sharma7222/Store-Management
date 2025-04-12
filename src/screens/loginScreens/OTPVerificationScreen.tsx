// src/screens/OTPVerificationScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';

type OTPVerificationScreenRouteProp = RouteProp<RootStackParamList, 'OTPVerification'>;
type OTPVerificationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'OTPVerification'
>;

const OTPVerificationScreen = () => {
  const [otp, setOtp] = useState('');
  const route = useRoute<OTPVerificationScreenRouteProp>();
  const navigation = useNavigation<OTPVerificationScreenNavigationProp>();

  // Example: Correct OTP is "1234"
  const correctOTP = '1234';

  const handleVerify = () => {
    if (otp === correctOTP) {
      // Navigate to the first user detail screen
      navigation.navigate('UserDetailsStep1');
    } else {
      Alert.alert('Incorrect OTP', 'Please enter the correct OTP or try sending it again.');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-transparent px-4">
      <Text className="text-xl font-bold mb-4">
        Verify OTP for {route.params.phoneNumber}
      </Text>
      <TextInput
        value={otp}
        onChangeText={setOtp}
        placeholder="Enter OTP"
        keyboardType="number-pad"
        className="w-full border border-gray-300 p-3 rounded mb-4"
      />
      <TouchableOpacity
        onPress={handleVerify}
        className="bg-green-500 p-3 rounded w-full items-center"
      >
        <Text className="text-white font-semibold">Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPVerificationScreen;
