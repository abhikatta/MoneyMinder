import { addDoc, serverTimestamp } from "@firebase/firestore";
import { Alert } from "react-native";
import { auth, mmCollection } from "../firebase/firebase";

const handleInput = async (input: string) => {
  console.log(input);
  if (input.length > 0) {
    const [, type, personName, amount] = input.trim().split(".");
    const validAmount = Number(amount);
    if (validAmount) {
      const newMM = {
        id: auth.currentUser.uid,
        timestamp: serverTimestamp(),
        transactionDone: false,
        personName: personName.trim(),
        amount: amount.trim(),
        type: type.trim() === "t" ? "take" : "give",
      };
      console.log(newMM);

      const addTransaction = await addDoc(mmCollection, newMM);
      if (addTransaction) {
        Alert.alert("Done", "Mind Added");
      }
    } else {
      Alert.alert("Please enter a valid amount.");
    }
  } else {
    Alert.alert("Please enter a valid statement.");
  }
};
export { handleInput };
