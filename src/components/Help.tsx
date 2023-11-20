import { Text, View } from "react-native";

import React from "react";

import helpStyles from "../styles/helpStyles";
const Help = () => {
  return (
    <View style={helpStyles.helpContainer}>
      <Text style={helpStyles.helpTitle}>How to Use</Text>
      <View style={helpStyles.helpContent}>
        <Text style={helpStyles.helpText}>
          • Use ' . ' for tagging properties.
        </Text>
        <Text style={helpStyles.helpText}>
          • 't' means 'to take / receive from'.
        </Text>
        <Text style={helpStyles.helpText}>
          • Similarly, 'g' means 'to give / return to'.
        </Text>
      </View>
      <View style={helpStyles.exampleContainer}>
        <Text style={helpStyles.exampleTitle}>Examples:</Text>
        <View style={helpStyles.example}>
          <Text style={helpStyles.exampleCode}>.g.person.400</Text>
          <Text style={helpStyles.exampleDescription}>Give person 400₹</Text>
        </View>
        <View style={helpStyles.example}>
          <Text style={helpStyles.exampleCode}>.t.person.400</Text>
          <Text style={helpStyles.exampleDescription}>
            Take 400₹ from person
          </Text>
        </View>
        <Text style={helpStyles.helpText}>
          {"\n"}Ex: .t .person .600 means:{"\n\n"}
          Collect 600₹ from person
        </Text>
      </View>
    </View>
  );
};

export default Help;
