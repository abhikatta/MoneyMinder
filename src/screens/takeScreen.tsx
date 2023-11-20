import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import React, { useEffect, useState } from "react";
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

const TakeScreen = () => {
  const [addToList, setAddtoList] = useState<Array<Mind>>([]);
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
        "Mark as Recieved?",
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
            where("transactionDone", "==", false),
            where("type", "==", "take")
          )
        );
        const transactions: Mind[] = querySnapshot.docs.map((doc): Mind => {
          const data = doc.data() as Mind;
          if (!data.transactionDone) {
            setTotalAmount((preAmount) => preAmount + Number(data.amount));
          }
          return {
            doc_id: doc.id,
            id: data.id,
            timestamp: data.timestamp,
            transactionDone: data.transactionDone,
            personName: data.personName,
            amount: data.amount,
            type: data.type,
          };
        });
        setAddtoList(transactions);
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
        Total amount to be recieved: ₹{totalAmount}/-
      </Text>
      <ScrollView>
        {addToList.map((transaction, index) => {
          return (
            <TouchableOpacity
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
              key={index}
              style={[
                styles.Card,
                {
                  backgroundColor: transaction.type === "take" ? "#defffd" : "",
                },
              ]}>
              <Text style={styles.cardElementA}>₹{transaction.amount}/-</Text>
              <Text style={styles.cardElementT}>from</Text>

              <Text style={styles.cardElementPN}>{transaction.personName}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  ) : (
    <NoTransactions type={"take"} />
  );
};
export default TakeScreen;
