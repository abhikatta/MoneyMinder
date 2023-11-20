import { Text, View } from "react-native";

import { styles } from "../styles/styles";

import React from "react";
// import React = require("react");

const NoTransactions = ({ type }) => {
  return (
    <View style={styles.noTransactions}>
      <Text style={styles.noTransactionsText}>
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
