import { Alert } from "react-native";

import { signInAnonymously, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import Login from "../screens/LoginScreen";
import React from "react";

const LOGINMAIN = () => {
  const login = async (email: string, password: string) => {
    if (
      email.length > 0 &&
      password.length > 0 &&
      email.trim() !== "" &&
      password.trim() !== ""
    ) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        if (
          error.code === "auth/invalid-email" ||
          error.code === "auth/invalid-login-credentials"
        ) {
          Alert.alert(
            "Invalid credentials",
            "Email or password incorrect. Please try again."
          );
        } else {
          Alert.alert("Error", "Something went wrong please try again.");
        }
        console.log(error);
      }
    } else {
      Alert.alert("Error!", "Please enter valid credentials!s");
    }
  };
  const loginAnonymously = async () => {
    try {
      await signInAnonymously(auth);
      console.log("logged in anonymously");
    } catch (error) {
      Alert.alert("Error", "Something went wrong please try again.");
      console.log(error);
    }
  };
  return <Login login={login} loginAnonymously={loginAnonymously} />;
};
export default LOGINMAIN;
