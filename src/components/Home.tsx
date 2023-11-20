import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { handleInput } from "../utils/inputFormatter";
import { styles } from "../styles/styles";
import React from "react";
import Help from "./Help";
import { DarkTheme, LightTheme } from "../styles/colors";

const Home = ({ navigation: any }) => {
  const [inputStatement, setInputStatement] = useState<string>("");
  const [helpButtonPressed, setHelpButtonPressed] = useState<boolean>(false);
  const isDarkMode: boolean = useColorScheme() === "dark";
  const theme = isDarkMode ? DarkTheme : LightTheme;
  const handleHelpPressed = () => {
    setHelpButtonPressed((prev) => !prev);
  };
  const helpButton = !helpButtonPressed ? "50%" : "0%";
  return (
    <View
      style={[
        styles.cardContainer,
        { paddingTop: helpButton, backgroundColor: theme.backGroundColor },
      ]}>
      <ScrollView
        style={{
          width: "100%",
          height: "100%",
        }}>
        <TouchableOpacity
          style={[
            [styles.homeButton, { backgroundColor: theme.button.background }],
          ]}
          onPress={handleHelpPressed}>
          <Text style={[styles.homeButtonText, { color: theme.button.text }]}>
            Help
          </Text>
        </TouchableOpacity>
        {helpButtonPressed && <Help />}
        <TextInput
          value={inputStatement}
          placeholderTextColor={theme.button.text}
          onChangeText={(e) => setInputStatement(e)}
          style={[
            styles.homeTransactionInput,
            {
              backgroundColor: theme.button.background,
              color: theme.button.text,
            },
          ]}
          placeholder="e.g: .g .personName .200"
          numberOfLines={1}
        />
        <TouchableOpacity
          style={[
            styles.homeButton,
            {
              backgroundColor: theme.button.background,
            },
          ]}
          onPress={() => (handleInput(inputStatement), setInputStatement(""))}>
          <Text style={[styles.homeButtonText, { color: theme.button.text }]}>
            Add
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Home;
