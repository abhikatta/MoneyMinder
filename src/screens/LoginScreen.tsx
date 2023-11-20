import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "../styles/styles";
import React from "react";

const Login = ({ login, loginAnonymously }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [securePassword, setSecurePassword] = useState<boolean>(true);

  const handleShowPassword = () => {
    setSecurePassword((prevSecurePassword) => !prevSecurePassword);
  };

  const clearCredentials = () => {
    setEmail("");
    setPassword("");
    setSecurePassword(true);
  };
  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginGreeting}>
        Hi there, enter your credentials to get started!
      </Text>
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
        value={password}
        numberOfLines={1}
        maxLength={40}
        secureTextEntry={securePassword}
        placeholder="Password"
        autoComplete="password"
        style={styles.loginInput}
        onChangeText={(password) => setPassword(password)}
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
          login(email, password);
          clearCredentials();
        }}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          loginAnonymously();
          clearCredentials();
        }}>
        <Text style={styles.loginButtonText}>Log In Anonymously</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Login;
