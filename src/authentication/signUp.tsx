import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Signup from "../screens/SignupScreen";
import { Alert } from "react-native";
import { auth } from "../firebase/firebase";
import React from "react";

const SIGNUPMAIN = () => {
  const signup = async (email: string, username: string, password: string) => {
    if (
      email.length > 0 &&
      username.length > 0 &&
      password.length > 0 &&
      email.trim() !== "" &&
      username.trim() !== "" &&
      password.trim() !== ""
    ) {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user.user, { displayName: username });
      } catch (error) {
        Alert.alert("Error", "Something went wrong please try again.");
        console.log(error);
      }
    } else {
      Alert.alert("Error!", "Please enter valid credentials!s");
    }
  };

  return <Signup signup={signup} />;
};
export default SIGNUPMAIN;
