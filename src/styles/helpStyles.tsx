import React = require("react");
import { StyleSheet } from "react-native";
const helpStyles = StyleSheet.create({
  helpContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
  },
  helpTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  helpContent: {
    marginBottom: 16,
  },
  helpText: {
    fontSize: 14,
    marginBottom: 8,
  },
  exampleContainer: {
    marginBottom: 16,
  },
  exampleTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  example: {
    flexDirection: "row",
    marginBottom: 8,
  },
  exampleCode: {
    fontSize: 14,
    fontWeight: "bold",
    marginRight: 8,
  },
  exampleDescription: {
    fontSize: 14,
  },
});
export default helpStyles;
