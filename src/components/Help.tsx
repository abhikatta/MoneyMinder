import { Text, View } from "react-native";

import React from "react";

import helpStyles from "../styles/helpStyles";
import { useColorScheme } from "react-native";
import { DarkTheme, LightTheme } from "../styles/colors";
const Help = () => {
  const isDarkMode: boolean = useColorScheme() === "dark";
  const theme = isDarkMode ? DarkTheme : LightTheme;
  return (
    <View
      style={[
        helpStyles.helpContainer,
        { backgroundColor: theme.button.background },
      ]}>
      <Text style={[helpStyles.helpTitle, { color: theme.button.text }]}>
        How to Use
      </Text>
      <View style={helpStyles.helpContent}>
        <Text style={[helpStyles.helpText, { color: theme.button.text }]}>
          • Use ' . ' for tagging properties.
        </Text>
        <Text style={[helpStyles.helpText, { color: theme.button.text }]}>
          • 't' means 'to take / receive from'.
        </Text>
        <Text style={[helpStyles.helpText, { color: theme.button.text }]}>
          • Similarly, 'g' means 'to give / return to'.
        </Text>
      </View>
      <View style={helpStyles.exampleContainer}>
        <Text style={[helpStyles.exampleTitle, { color: theme.button.text }]}>
          Examples:
        </Text>
        <View style={helpStyles.example}>
          <Text style={[helpStyles.exampleCode, { color: theme.button.text }]}>
            .g.person.400
          </Text>
          <Text
            style={[
              helpStyles.exampleDescription,
              { color: theme.button.text },
            ]}>
            Give person 400₹
          </Text>
        </View>
        <View style={helpStyles.example}>
          <Text style={[helpStyles.exampleCode, { color: theme.button.text }]}>
            .t.person.400
          </Text>
          <Text
            style={[
              helpStyles.exampleDescription,
              { color: theme.button.text },
            ]}>
            Take 400₹ from person
          </Text>
        </View>
        <Text style={[helpStyles.helpText, { color: theme.button.text }]}>
          {"\n"}Ex: .t .person .600 means:{"\n\n"}
          Collect 600₹ from person
        </Text>
      </View>
    </View>
  );
};

export default Help;
