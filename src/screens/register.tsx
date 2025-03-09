import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { registerUser } from "./../services/auth";

// Define the type for the component's state
type RegisterState = {
  email: string;
  password: string;
  confirmPassword: string;
};

const RegisterPage: React.FC = () => {
  const [state, setState] = useState<RegisterState>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (key: keyof RegisterState, value: string) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleRegister = async() => {
    if (state.password !== state.confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
    // Add your registration logic here
    try {
      await registerUser(state);
      Alert.alert("Success", "Registered successfully!");
      setState({
        email: "",
        password: "",
        confirmPassword: "",
      })
    } catch (e) {
      Alert.alert("Error", "Error registering users");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={state.email}
        onChangeText={(value) => handleChange("email", value)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={state.password}
        onChangeText={(value) => handleChange("password", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={state.confirmPassword}
        onChangeText={(value) => handleChange("confirmPassword", value)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterPage;
