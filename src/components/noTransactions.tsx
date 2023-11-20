import { Text, View } from "react-native";

import { styles } from "../styles/styles";

import React from "react";
import { useColorScheme } from "react-native";
import { DarkTheme, LightTheme } from "../styles/colors";
// import React = require("react");

const NoTransactions = ({ type }) => {
  const isDarkMode = useColorScheme() === "dark";
  const theme = isDarkMode ? DarkTheme : LightTheme;
  return (
    <View
      style={[
        styles.noTransactions,
        { backgroundColor: theme.backGroundColor },
      ]}>
      <Text
        style={[
          styles.noTransactionsText,
          {
            color: theme.textColor,
          },
        ]}>
        {type !== "both"
          ? type === "take"
            ? "There are no transactions to be recieved..."
            : "There are no transactions to be transferred..."
          : "No history..."}
      </Text>
    </View>
  );
};

export default NoTransactions;
