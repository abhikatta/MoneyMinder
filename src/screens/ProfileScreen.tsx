import { Alert, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase/firebase";
import { styles } from "../styles/styles";
import React from "react";

const ProfileScreen = ({ navigation: any }) => {
  async function logout() {
    Alert.alert("Logout & Exit?", "Are you sure you want to logout?", [
      {
        text: "Yes",
        onPress: async () => {
          try {
            await auth.signOut();
          } catch (error) {
            Alert.alert("Something went wrong, Please try again.");
            console.log(error);
          }
        },
      },
      { text: "No", onPress: () => null },
    ]);
  }
  return (
    <View style={[styles.container]}>
      <Text style={styles.profileDetails}>
        Username:{" "}
        {!auth.currentUser.isAnonymous
          ? auth.currentUser.displayName
            ? auth.currentUser.displayName
            : auth.currentUser.email.split("@")[0]
          : "Guest"}
      </Text>
      <Text style={styles.profileDetails}>
        Email ID:{" "}
        {auth.currentUser.email ? auth.currentUser.email : "guest@gmail.com"}
      </Text>
      {auth.currentUser.isAnonymous ? (
        <>
          <Text style={[styles.profileDetails, { color: "red" }]}>
            NOTE: All the data will be lost when you logout.
          </Text>
        </>
      ) : (
        ""
      )}
      <TouchableOpacity style={styles.profileButton} onPress={() => logout()}>
        <Text style={styles.profileButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ProfileScreen;
