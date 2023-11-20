import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { handleInput } from "../utils/inputFormatter";
import { styles } from "../styles/styles";
import React from "react";
import Help from "./Help";

const Home = ({ navigation: any }) => {
  const [inputStatement, setInputStatement] = useState<string>("");
  const [helpButtonPressed, setHelpButtonPressed] = useState<boolean>(false);
  const handleHelpPressed = () => {
    setHelpButtonPressed((prev) => !prev);
  };
  const helpButton = !helpButtonPressed ? "50%" : "0%";
  return (
    <View style={[styles.cardContainer, { paddingTop: helpButton }]}>
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
        }}>
        <TouchableOpacity style={styles.homeButton} onPress={handleHelpPressed}>
          <Text style={styles.homeButtonText}>Help</Text>
        </TouchableOpacity>
        {helpButtonPressed && <Help />}
        <TextInput
          value={inputStatement}
          placeholderTextColor="black"
          onChangeText={(e) => setInputStatement(e)}
          style={styles.homeTransactionInput}
          placeholder="e.g: .g .personName .200"
          numberOfLines={1}
        />
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => (handleInput(inputStatement), setInputStatement(""))}>
          <Text style={styles.homeButtonText}>Add</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Home;
