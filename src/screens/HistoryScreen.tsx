import {
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { styles } from "../styles/styles";
import { useEffect, useState } from "react";
import {
  onSnapshot,
  query,
  getDocs,
  deleteDoc,
  where,
  doc,
  updateDoc,
} from "@firebase/firestore";
import { auth, mmCollection } from "../firebase/firebase";

import NoTransactions from "../components/noTransactions";
import { Mind } from "../types/types";
import React from "react";
import { DarkTheme, LightTheme } from "../styles/colors";

const HistoryScreen = () => {
  const [addToList, setAddtoList] = useState<Array<Mind>>([]);

  const isDarkMode = useColorScheme() === "dark";
  const theme = isDarkMode ? DarkTheme : LightTheme;
  useEffect(() => {
    if (auth.currentUser && !auth.currentUser.isAnonymous) {
      try {
        const unsubscribe = onSnapshot(mmCollection, () => {
          getTransactions();
        });
        return () => {
          // Unsubscribe from the snapshot listener when the component is unmounted
          unsubscribe();
        };
      } catch (error) {
        Alert.alert("Error", "Something went wrong. Please try again.");
      }
    } else {
      return;
    }
  }, [auth.currentUser]);

  const handleTransactionDone = async (transaction: Mind) => {
    try {
      Alert.alert(
        "Undo?",
        'Clicking "Yes" will mark this transaction as incomplete. Are you sure?',
        [
          {
            text: "Yes",
            onPress: async () => {
              const transactionRef = doc(mmCollection, transaction.doc_id);

              await updateDoc(transactionRef, {
                transactionDone: !transaction.transactionDone,
              });
            },
          },
          {
            text: "No",
            onPress: () => {
              return;
            },
          },
        ]
      );

      getTransactions();
    } catch (error) {
      Alert.alert("Error", "Something went wrong, please try again.");
      console.log(error);
    }
  };
  const getTransactions = async () => {
    if (auth.currentUser && !auth.currentUser.isAnonymous) {
      try {
        const querySnapshot = await getDocs(
          query(
            mmCollection,
            where("id", "==", auth.currentUser.uid),
            where("transactionDone", "==", true)
          )
        );
        const transactions: Array<Mind> = querySnapshot.docs.map(
          (doc): Mind => {
            const data = doc.data() as Mind;
            return {
              id: data.id,
              doc_id: doc.id,
              timestamp: data.timestamp,
              transactionDone: data.transactionDone,
              personName: data.personName,
              amount: data.amount,
              type: data.type,
            };
          }
        );
        setAddtoList(transactions);
        console.log(addToList.length === 0 ? "nothing there yet" : addToList);
      } catch (error) {
        Alert.alert("Error!", "Something went wrong, please try again.");
        console.log(error);
      }
    } else {
      return;
    }
  };
  const handleDeleteAllTransactions = async () => {
    try {
      if (auth.currentUser.isAnonymous) {
        return;
      } else {
        Alert.alert(
          "Clear history?",
          "Are you sure you want to delete all your history? This action is irreversible!",
          [
            {
              text: "Yes",
              onPress: async () => {
                const querySnapshot = await getDocs(
                  query(
                    mmCollection,
                    where("id", "==", auth.currentUser.uid),
                    where("transactionDone", "==", true)
                  )
                );

                querySnapshot.forEach((doc) => {
                  deleteDoc(doc.ref)
                    .then(() => {
                      console.log(`Document ${doc.id} successfully deleted!`);
                    })
                    .catch((error) => {
                      console.error(
                        `Error deleting document: ${doc.id}\n`,
                        error
                      );
                    });
                });
              },
            },
            {
              text: "Maybe not",
              onPress: () => null,
            },
          ]
        );
      }
    } catch (error) {
      console.error(
        "Error trying to delete all journal entries from Firestore:",
        error
      );
      Alert.alert("Error deleting data!", "Something went wrong.");
    }
  };

  return addToList.length > 0 ? (
    <View
      style={[
        styles.cardContainer,
        { backgroundColor: theme.backGroundColor },
      ]}>
      <TouchableOpacity
        onPress={handleDeleteAllTransactions}
        style={[styles.Card, { backgroundColor: theme.textColor }]}>
        <Text
          style={[
            styles.cardElementPN,
            {
              color: theme.backGroundColor,
            },
          ]}>
          Delete all transactions
        </Text>
      </TouchableOpacity>
      <ScrollView>
        {addToList.map((transaction, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleTransactionDone(transaction)}
              onLongPress={() =>
                Alert.alert(
                  "Added on :",
                  `${
                    transaction.timestamp &&
                    transaction.timestamp.toDate().toString()
                  }`
                )
              }
              style={[
                styles.Card,
                {
                  backgroundColor:
                    transaction.type === "give"
                      ? theme.cardContainerColor.give
                      : theme.cardContainerColor.take,
                  opacity: 0.5,
                },
              ]}>
              <Text
                style={[
                  styles.cardElementA,
                  {
                    color: theme.button.text,
                  },
                ]}>
                ₹{transaction.amount}/-
              </Text>
              <Text
                style={[
                  styles.cardElementT,
                  {
                    color: theme.button.text,
                  },
                ]}>
                {transaction.type === "take" ? "from" : "to"}
              </Text>
              <Text
                style={[
                  styles.cardElementPN,
                  {
                    color: theme.button.text,
                  },
                ]}>
                {transaction.personName}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  ) : (
    <NoTransactions type={"both"} />
  );
};
export default HistoryScreen;
