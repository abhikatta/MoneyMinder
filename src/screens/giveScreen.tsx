import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { styles } from "../styles/styles";
import { useEffect, useState } from "react";
import {
  onSnapshot,
  query,
  getDocs,
  where,
  doc,
  updateDoc,
} from "@firebase/firestore";
import { auth, mmCollection } from "../firebase/firebase";

import NoTransactions from "../components/noTransactions";
import { Mind } from "../types/types";
import React from "react";

const GiveScreen = () => {
  const [addToList, setAddtoList] = useState([]);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);

  useEffect(() => {
    if (auth.currentUser && !auth.currentUser.isAnonymous) {
      try {
        const unsubscribe = onSnapshot(mmCollection, () => {
          getTransactions();
          setTotalAmount(0);
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
        "Mark as Returned?",
        'Clicking "Yes" will mark this transaction as completed. Are you sure?',
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
            where("type", "==", "give"),
            where("transactionDone", "==", false)
          )
        );
        const transactions = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          if (!data.transactionDone) {
            setTotalAmount((preAmount) => preAmount + Number(data.amount));
          }
          return {
            id: data.id,
            doc_id: doc.id,
            timestamp: data.timestamp,
            transactionDone: data.transactionDone,
            personName: data.personName,
            amount: data.amount,
            type: data.type,
          };
        });
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
  return addToList.length > 0 ? (
    <View style={styles.cardContainer}>
      <Text style={styles.cardElementPN}>
        Total amount to be transferred: ₹{totalAmount}/-
      </Text>
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
                  backgroundColor: transaction.type === "take" ? "" : "#ffaaad",
                },
              ]}>
              <Text style={styles.cardElementA}>₹{transaction.amount}/-</Text>
              <Text style={styles.cardElementT}>to</Text>

              <Text style={styles.cardElementPN}>{transaction.personName}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  ) : (
    <NoTransactions type={"give"} />
  );
};
export default GiveScreen;
