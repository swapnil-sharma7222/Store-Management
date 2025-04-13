// // src/screens/PhoneNumberScreen.tsx
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../navigation/AppNavigator';
// import { useNavigation } from '@react-navigation/native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// type PhoneNumberScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'PhoneNumber'
// >;

// const PhoneNumberScreen = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const navigation = useNavigation<PhoneNumberScreenNavigationProp>();

//   const handleNext = () => {
//     // You can add validation for the phone number here if needed
//     navigation.navigate('OTPVerification', { phoneNumber });
//   };

//   return (
//     <SafeAreaView className='mt-10'>
//       <View className="flex-1 justify-center items-center bg-transparent px-4">
//         <Text className="text-xl font-bold mb-4">Enter Your Phone Number</Text>
//         <TextInput
//           value={phoneNumber}
//           onChangeText={setPhoneNumber}
//           placeholder="Phone Number"
//           keyboardType="phone-pad"
//           className="w-full border border-gray-300 p-3 rounded mb-4"
//           />
//         <TouchableOpacity
//           onPress={handleNext}
//           className="bg-blue-500 p-3 rounded w-full items-center"
//           >
//           <Text className="text-white font-semibold">Next</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default PhoneNumberScreen;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../../navigation/AppNavigator';
// import { useNavigation } from '@react-navigation/native';

// type PhoneNumberScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'PhoneNumber'
// >;

// const PhoneNumberScreen = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const navigation = useNavigation<PhoneNumberScreenNavigationProp>();

//   const handleNext = () => {
//     navigation.navigate('OTPVerification', { phoneNumber });
//   };

//   return (
//     <SafeAreaView className="flex-1 flex justify-center items-center bg-gray-100 px-4">
//       <View className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
//         <Text className="text-3xl font-bold text-center text-gray-800 mb-4">Logo</Text>
//         <Text className="text-lg text-center text-gray-600 mb-6">Tagline</Text>

//         <Text className="text-xl font-semibold text-gray-800 mb-3 text-center">
//           Enter Your Phone Number
//         </Text>
//         <TextInput
//           value={phoneNumber}
//           onChangeText={setPhoneNumber}
//           placeholder="Phone Number"
//           keyboardType="phone-pad"
//           className="w-full border border-gray-300 p-4 rounded-lg mb-6 text-gray-800"
//         />

//         <TouchableOpacity
//           onPress={handleNext}
//           className="bg-blue-500 p-4 rounded-lg w-full items-center"
//         >
//           <Text className="text-white font-semibold text-lg">Get OTP</Text>
//         </TouchableOpacity>

//         <Text className="text-sm text-center text-gray-600 mt-4">
//           By using this app, you agree to our{' '}
//           <Text className="text-blue-600 underline">Terms of Service</Text> and{' '}
//           <Text className="text-blue-600 underline">Privacy Policy</Text>
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default PhoneNumberScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import { z } from 'zod';

type PhoneNumberScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PhoneNumber'
>;

const phoneNumberSchema = z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits');

const PhoneNumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation<PhoneNumberScreenNavigationProp>();

  const navigateToSkip = () => {
    // Handle skip functionality
    navigation.navigate('SampleScreen');
  };

  const handleNext = () => {
    try {
      // Validate phone number using Zod
      phoneNumberSchema.parse(phoneNumber);
      setError(''); // Clear any previous errors
      navigation.navigate('OTPVerification', { phoneNumber });
    } catch (e) {
      if (e instanceof z.ZodError) {
        setError(e.errors[0].message); // Display the first validation error
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      > */}

      <View style={{width: '100%'}}>
        <View style={styles.skipContainer}>
          <TouchableOpacity onPress={navigateToSkip} style={styles.skipButton}>
            <Text style={styles.text}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.logo}>Logo</Text>
        <Text style={styles.tagline}>Tagline</Text>

        <Text style={styles.title}>Enter Your Phone Number</Text>
        <TextInput
          value={phoneNumber}
          onChangeText={(text) => {
            setPhoneNumber(text);
            setError(''); // Clear error as the user types
          }}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          style={[styles.input, error ? styles.inputError : null]}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>Get OTP</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          By using this app, you agree to our{' '}
          <Text style={styles.link}>Terms of Service</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  innerContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  tagline: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 5,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: '#ff4d4d',
  },
  errorText: {
    color: '#ff4d4d',
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  link: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  skipContainer: {
    alignItems: 'flex-end',
  },
  skipButton: {
    cursor: 'pointer',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 9999,
  },
  text: {
    textDecorationLine: 'underline',
    color: '#1f2937',
  },

});

export default PhoneNumberScreen;