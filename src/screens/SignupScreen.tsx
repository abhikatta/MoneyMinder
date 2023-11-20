import { useState } from "react";
import { styles } from "../styles/styles";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import React = require("react");

const Signup = ({ signup }) => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [securePassword, setSecurePassword] = useState<boolean>(true);

  const handleShowPassword = () => {
    setSecurePassword((prevSecurePassword) => !prevSecurePassword);
  };

  const clearCredentials = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setUsername("");
  };
  return (
    <View style={styles.loginContainer}>
      <TextInput
        value={email}
        numberOfLines={1}
        maxLength={40}
        placeholder="Email"
        onChangeText={(email) => setEmail(email)}
        autoComplete="email"
        style={styles.loginInput}
      />
      <TextInput
        value={username}
        numberOfLines={1}
        maxLength={40}
        placeholder="Username"
        onChangeText={(username) => setUsername(username)}
        autoComplete="username"
        style={styles.loginInput}
      />
      <TextInput
        value={password}
        numberOfLines={1}
        maxLength={40}
        autoComplete="password"
        secureTextEntry={securePassword}
        placeholder="Password"
        style={styles.loginInput}
        onChangeText={(password) => setPassword(password)}
      />
      <TextInput
        value={confirmPassword}
        numberOfLines={1}
        autoComplete="password"
        maxLength={40}
        secureTextEntry={securePassword}
        placeholder="Confirm Password"
        style={styles.loginInput}
        onChangeText={(password) => setConfirmPassword(password)}
      />
      <BouncyCheckbox
        style={styles.showPassword}
        onPress={handleShowPassword}
        isChecked={!securePassword}
        size={20}
        fillColor="teal"
        textStyle={{
          textDecorationLine: "none",
          fontSize: 13,
          width: 100,
        }}
        text="Show Password"
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          if (password === confirmPassword && password.length > 0) {
            signup(email, username, password);
            clearCredentials();
          }
        }}>
        <Text style={styles.loginButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Signup;
