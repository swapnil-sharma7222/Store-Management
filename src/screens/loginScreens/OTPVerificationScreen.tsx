import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';

type OTPVerificationScreenRouteProp = RouteProp<RootStackParamList, 'OTPVerification'>;
type OTPVerificationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'OTPVerification'
>;

const OTPVerificationScreen = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [timer, setTimer] = useState(30);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef<TextInput[]>([]);
  const route = useRoute<OTPVerificationScreenRouteProp>();
  const navigation = useNavigation<OTPVerificationScreenNavigationProp>();

  const correctOTP = '123456'; // Replace with actual OTP logic

  // Timer logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setIsResendDisabled(false);
    }
  }, [timer]);

  // Handle OTP verification
  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === correctOTP) {
      navigation.navigate('UserDetailsStep1'); // Modify according to your navigation structure
    } else {
      Alert.alert('Incorrect OTP', 'Please enter the correct OTP or try sending it again.');
    }
  };

  // Handle Resend Code
  const handleResendCode = () => {
    setOtp(new Array(6).fill('')); // Clear OTP inputs
    setTimer(30); // Reset timer
    setIsResendDisabled(true);
    Alert.alert('Code Resent', 'A new OTP has been sent to your phone.');
  };

  // Handle input change
  const handleInputChange = (text: string, index: number) => {
    if (text.length > 1) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = text;
    setOtp(updatedOtp);

    // Move to the next input or trigger verify
    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    } else if (index === 5) {
      handleVerify(); // Auto-trigger verify when the last digit is entered
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    // Move to previous input on backspace if current input is empty
    if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleEditPhone = () => {
    navigation.goBack();
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>

      <Text style={styles.subtitle}>
        Enter the code sent to <Text style={styles.phoneNumber}>{route.params.phoneNumber}</Text>
        <TouchableOpacity onPress={handleEditPhone} className="ml-2">
          <Text className="text-gray-800">✎</Text>
        </TouchableOpacity>
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(text) => handleInputChange(text, index)}
            placeholder="0"
            maxLength={1}
            keyboardType="number-pad"
            style={styles.otpInput}
            ref={(ref) => {
              inputRefs.current[index] = ref!;
            }}
            onKeyPress={(e) => handleKeyPress(e, index)}
          />
        ))}
      </View>

      <Text style={styles.timerText}>
        Resend Code in <Text style={styles.timer}>{timer}s</Text>
      </Text>

      <TouchableOpacity
        onPress={handleResendCode}
        style={[styles.resendButton, isResendDisabled && styles.resendButtonDisabled]}
        disabled={isResendDisabled}
      >
        <Text style={styles.resendButtonText}>Resend Code</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 30,
  },
  phoneNumber: {
    color: '#007bff',
    fontWeight: '600',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 5,
    backgroundColor: '#f9f9f9',
  },
  timerText: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 20,
  },
  timer: {
    color: '#007bff',
    fontWeight: '600',
  },
  resendButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  resendButtonDisabled: {
    backgroundColor: '#cccccc',
  },
  resendButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OTPVerificationScreen;


// // src/screens/OTPVerificationScreen.tsx
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
// import { RootStackParamList } from '../../navigation/AppNavigator';
// import { SafeAreaView } from 'react-native-safe-area-context';


// type OTPVerificationScreenRouteProp = RouteProp<RootStackParamList, 'OTPVerification'>;
// type OTPVerificationScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'OTPVerification'
// >;

// const OTPVerificationScreen = () => {
//   const [otp, setOtp] = useState('');
//   const route = useRoute<OTPVerificationScreenRouteProp>();
//   const navigation = useNavigation<OTPVerificationScreenNavigationProp>();

//   // Example: Correct OTP is "1234"
//   const correctOTP = '1234';

//   const handleVerify = () => {
//     if (otp === correctOTP) {
//       // Navigate to the first user detail screen
//       navigation.navigate('UserDetailsStep1');
//     } else {
//       Alert.alert('Incorrect OTP', 'Please enter the correct OTP or try sending it again.');
//     }
//   };

//   return (
//     <SafeAreaView className='mt-10'>
//       <View className="flex-1 justify-center items-center bg-transparent px-4 mt-20">
//         <Text className="text-xl font-bold mb-4">
//           Verify OTP for {route.params.phoneNumber}
//         </Text>
//         <TextInput
//           value={otp}
//           onChangeText={setOtp}
//           placeholder="Enter OTP"
//           keyboardType="number-pad"
//           className="w-full border border-gray-300 p-3 rounded mb-4"
//           autoFocus
//         />
//         <TouchableOpacity
//           onPress={handleVerify}
//           className="bg-green-500 p-3 rounded w-full items-center"
//         >
//           <Text className="text-white font-semibold">Verify OTP</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>

//   );
// };

// export default OTPVerificationScreen;


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
// import { RootStackParamList } from '../../navigation/AppNavigator';

// type OTPVerificationScreenRouteProp = RouteProp<RootStackParamList, 'OTPVerification'>;
// type OTPVerificationScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'OTPVerification'
// >;

// const OTPVerificationScreen = () => {
//   const [otp, setOtp] = useState('');
//   const route = useRoute<OTPVerificationScreenRouteProp>();
//   const navigation = useNavigation<OTPVerificationScreenNavigationProp>();

//   const correctOTP = '1234'; // Replace with actual OTP logic

//   const handleVerify = () => {
//     if (otp === correctOTP) {
//       navigation.navigate('UserDetailsStep1'); // Modify according to your navigation structure
//     } else {
//       Alert.alert('Incorrect OTP', 'Please enter the correct OTP or try sending it again.');
//     }
//   };

//   return (
//     <SafeAreaView className="flex-1 justify-center items-center bg-white px-4">
//       <Text className="text-3xl font-bold mb-6">OTP Verification</Text>

//       <Text className="text-lg mb-4">
//         Enter the code sent to <Text className="text-blue-600">{route.params.phoneNumber}</Text>
//       </Text>

//       <View className="flex-row justify-center mb-6">
//         {new Array(6).fill('').map((_, index) => (
//           <TextInput
//             key={index}
//             value={otp[index] || ''}
//             onChangeText={(text) => {
//               const updatedOtp = otp.split('');
//               updatedOtp[index] = text;
//               setOtp(updatedOtp.join(''));
//             }}
//             placeholder="0"
//             maxLength={1}
//             keyboardType="number-pad"
//             className="w-12 h-12 text-center border-2 border-gray-300 rounded-lg mx-2"
//             autoFocus={index === 0}
//           />
//         ))}
//       </View>

//       <TouchableOpacity
//         onPress={handleVerify}
//         className="bg-green-500 p-4 rounded-lg w-full items-center"
//       >
//         <Text className="text-white font-semibold">Submit</Text>
//       </TouchableOpacity>

//       <Text className="text-sm text-center mt-4">
//         Resend Code in <Text className="text-blue-600">00:10</Text>
//       </Text>
//     </SafeAreaView>
//   );
// };

// export default OTPVerificationScreen;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView, StyleSheet } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
// import { RootStackParamList } from '../../navigation/AppNavigator';

// type OTPVerificationScreenRouteProp = RouteProp<RootStackParamList, 'OTPVerification'>;
// type OTPVerificationScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'OTPVerification'
// >;

// const OTPVerificationScreen = () => {
//   const [otp, setOtp] = useState('');
//   const route = useRoute<OTPVerificationScreenRouteProp>();
//   const navigation = useNavigation<OTPVerificationScreenNavigationProp>();

//   const correctOTP = '123456'; // Replace with actual OTP logic

//   const handleVerify = () => {
//     if (otp === correctOTP) {
//       navigation.navigate('UserDetailsStep1'); // Modify according to your navigation structure
//     } else {
//       Alert.alert('Incorrect OTP', 'Please enter the correct OTP or try sending it again.');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>OTP Verification</Text>

//       <Text style={styles.subtitle}>
//         Enter the code sent to <Text style={styles.phoneNumber}>{route.params.phoneNumber}</Text>
//       </Text>

//       <View style={styles.otpContainer}>
//         {new Array(6).fill('').map((_, index) => (
//           <TextInput
//             key={index}
//             value={otp[index] || ''}
//             onChangeText={(text) => {
//               const updatedOtp = otp.split('');
//               updatedOtp[index] = text;
//               setOtp(updatedOtp.join(''));
//             }}
//             placeholder="0"
//             maxLength={1}
//             keyboardType="number-pad"
//             style={styles.otpInput}
//             autoFocus={index === 0}
//           />
//         ))}
//       </View>

//       <TouchableOpacity onPress={handleVerify} style={styles.button}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>

//       <Text style={styles.resendText}>
//         Resend Code in <Text style={styles.resendTimer}>00:10</Text>
//       </Text>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//     padding: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#333333',
//     marginBottom: 20,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#666666',
//     textAlign: 'center',
//     marginBottom: 30,
//   },
//   phoneNumber: {
//     color: '#007bff',
//     fontWeight: '600',
//   },
//   otpContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 30,
//   },
//   otpInput: {
//     width: 50,
//     height: 50,
//     borderWidth: 2,
//     borderColor: '#cccccc',
//     borderRadius: 8,
//     textAlign: 'center',
//     fontSize: 18,
//     marginHorizontal: 5,
//     backgroundColor: '#f9f9f9',
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#28a745',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   resendText: {
//     fontSize: 14,
//     color: '#666666',
//     textAlign: 'center',
//   },
//   resendTimer: {
//     color: '#007bff',
//     fontWeight: '600',
//   },
// });

// export default OTPVerificationScreen;
