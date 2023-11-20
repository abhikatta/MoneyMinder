import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
const firebaseConfig = {
  apiKey: "AIzaSyDsFR6aAYrv_dRR8rNlEMX9Xvp8itWPIek",
  authDomain: "moneyminder-ea2c8.firebaseapp.com",
  projectId: "moneyminder-ea2c8",
  storageBucket: "moneyminder-ea2c8.appspot.com",
  messagingSenderId: "525005891966",
  appId: "1:525005891966:web:013a5d9b23f31a3fceeb2f",
  measurementId: "G-PZJWXQ6KB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "MoneyMinder");
const db = getFirestore(app);

const auth = initializeAuth(app, {
  // persistence: ReactNativeAsyncStorage,
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// const auth = initializeAuth(app);

if (auth) {
  console.log("auth initialized");
}
const mmCollection = collection(db, "transactions");
export { auth, mmCollection, db };
