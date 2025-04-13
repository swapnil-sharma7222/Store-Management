import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Image, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';

type UserDetailsStep2NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UserDetailsStep2'
>;

const UserDetailsStep2 = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigation = useNavigation<UserDetailsStep2NavigationProp>();

  const handleNext = () => {
    console.log('First Name:', firstName, 'Last Name:', lastName);
  
    // Validation for first name and last name
    if (!firstName.trim()) {
      Alert.alert('Error', 'Please enter your first name.');
      return;
    }
  
    if (!lastName.trim()) {
      Alert.alert('Error', 'Please enter your last name.');
      return;
    }
  
    // Navigate to the next screen with firstName
    navigation.navigate('UserDetailsStep2', { firstName });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Hi! Tell a bit about yourself</Text>
        <Image
          source={{uri: 'https://s3-alpha-sig.figma.com/img/4922/b6af/0ee77376b04c93bacafd4229e85c3acc?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=d5Lrvh8x8SlkqnIi39iIDyzGv~1dW2zPAqs-I6p3YHwRXXyRAqmyFDDiWbRJvg9AFfCHKFRuTn0ykQLhqf2Nvl3ZYgd38eJJfX4W1sxpPrVCr5ZlJHoTX8-pA24YUmNH2tABbzjz-Zc4JgzxEHGR6-ib2t0oMEhkBJ4ZG83v6bZdIaKhxcETqBELQ8znHv0NGQ1HbkrQ~aZ1Ip2xu9foPzaWauprQMdiP7RPz0mBdDx-UPQbA8abLldXE3OvV0RwHzFyLw8nip0L22VMySpFMrWz-ecryBc-ZHRk3-nI6e9ewKeJEz88IsYRYHctMzUQAKmb5uje2oP~yZZzrE0~UQ__'}} 
          style={styles.image}
        />
        {/* First Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name*</Text>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            placeholder="First Name"
            style={styles.input}
          />
        </View>

        {/* Last Name Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name*</Text>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            placeholder="Last Name"
            style={styles.input}
          />
        </View>

        {/* Next Button */}
        <TouchableOpacity onPress={handleNext} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    textAlign: 'left',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#ff7f50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 34,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
});

export default UserDetailsStep2;
