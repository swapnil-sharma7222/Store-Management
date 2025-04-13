import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { TextInputMask } from 'react-native-masked-text';

type UserDetailsStep2NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'UserDetailsStep2'
>;
type UserDetailsStep2RouteProp = RouteProp<RootStackParamList, 'UserDetailsStep2'>;

const UserDetailsStep2 = () => {
  const route = useRoute<UserDetailsStep2RouteProp>();
  const { firstName } = route.params;
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('Male');
  const navigation = useNavigation<UserDetailsStep2NavigationProp>();

  const handleNext = () => {
    console.log('Date of Birth:', dateOfBirth, 'Gender:', gender);
    // Navigate further if needed
    navigation.navigate('UserDetailsStep3', { firstName });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Title Text */}
        <Text style={styles.title}>Great! {firstName} few more info</Text>
        {/* Image at the top */}
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/4922/b6af/0ee77376b04c93bacafd4229e85c3acc?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=d5Lrvh8x8SlkqnIi39iIDyzGv~1dW2zPAqs-I6p3YHwRXXyRAqmyFDDiWbRJvg9AFfCHKFRuTn0ykQLhqf2Nvl3ZYgd38eJJfX4W1sxpPrVCr5ZlJHoTX8-pA24YUmNH2tABbzjz-Zc4JgzxEHGR6-ib2t0oMEhkBJ4ZG83v6bZdIaKhxcETqBELQ8znHv0NGQ1HbkrQ~aZ1Ip2xu9foPzaWauprQMdiP7RPz0mBdDx-UPQbA8abLldXE3OvV0RwHzFyLw8nip0L22VMySpFMrWz-ecryBc-ZHRk3-nI6e9ewKeJEz88IsYRYHctMzUQAKmb5uje2oP~yZZzrE0~UQ__' }}
          style={styles.image}
        />

        {/* Input for Date of Birth */}
        <Text style={styles.label}>Date of Birth*</Text>
        {/* <TextInput
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          placeholder="Date of Birth (DD/MM/YYYY)"
          keyboardType="numeric"
          style={styles.input}
        /> */}
        <TextInputMask
          type={'datetime'}
          options={{
            format: 'DD/MM/YYYY',
          }}
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          placeholder="DD/MM/YYYY"
          keyboardType="numeric"
          style={styles.input}
        />

        {/* Gender Selection */}
        <View style={styles.radioGroup}>
          <TouchableOpacity
            style={[styles.radioButton, gender === 'Male' && styles.selectedRadioButton]}
            onPress={() => setGender('Male')}
          >
            <Text style={styles.radioButtonText}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, gender === 'Female' && styles.selectedRadioButton]}
            onPress={() => setGender('Female')}
          >
            <Text style={styles.radioButtonText}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, gender === 'Others' && styles.selectedRadioButton]}
            onPress={() => setGender('Others')}
          >
            <Text style={styles.radioButtonText}>Others</Text>
          </TouchableOpacity>
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
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  radioGroup: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-around',
    width: '100%',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    marginHorizontal: 5,
  },
  radioButtonText: {
    fontSize: 16,
    color: '#333',
  },
  selectedRadioButton: {
    backgroundColor: '#ff7f50', // Highlight selected option
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
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    textAlign: 'left',
  },
});

export default UserDetailsStep2;
