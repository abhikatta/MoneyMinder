import { StyleSheet, useColorScheme } from "react-native";

export const styles = StyleSheet.create({
  // loginScreen:
  loginInput: {
    backgroundColor: "#defaed",
    width: "80%",
    height: 60,
    borderRadius: 10,
    fontSize: 18,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginVertical: 5,
  },
  loginContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#bcd8cb",
  },
  loginGreeting: {
    fontSize: 22,

    textAlign: "center",
    marginHorizontal: "2%",
    justifyContent: "center",
    alignContent: "center",
  },
  showPassword: {
    marginVertical: 10,
    width: "80%",
    alignSelf: "center",
  },
  loginButton: {
    backgroundColor: "teal",
    alignItems: "center",
    width: "70%",
    height: 40,
    borderRadius: 20,
    marginVertical: 10,
    justifyContent: "center",
  },
  loginButtonText: {},
  // ----------------

  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "#black",
    alignItems: "center",
    justifyContent: "center",
  },
  helpBox: {
    width: "80%",

    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 2,
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
  homeTransactionInput: {
    height: 70,
    width: "97%",
    fontSize: 22,
    textAlign: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    alignSelf: "center",
    fontWeight: "bold",
    marginVertical: 20,
  },
  helpExample: {
    backgroundColor: "gold",
    fontWeight: "bold",
    borderRadius: 10,
    textAlign: "center",
    paddingHorizontal: 4,
    paddingVertical: 3,
    marginVertical: 3,
  },
  helpButton: {
    width: "20%",
    textAlign: "center",

    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 10,
  },
  Card: {
    borderRadius: 10,
    padding: 10,
    width: "90%",
    alignSelf: "center",
    marginVertical: 5,
  },
  cardElementA: {
    fontSize: 30,
    textAlign: "center",
  },
  cardElementT: {
    fontSize: 10,

    textAlign: "center",
  },
  cardElementPN: {
    fontSize: 20,
    textAlign: "center",
  },
  cardContainer: {
    width: "99%",
    height: "100%",

    borderRadius: 20,
    alignSelf: "center",
  },
  containerHolders: {
    flex: 1,
    flexDirection: "row",
  },
  // profileScreen:
  profileDetails: {
    backgroundColor: "#defaed",
    width: "90%",
    height: "auto",
    borderRadius: 10,
    fontSize: 16,
    textAlign: "left",
    paddingHorizontal: "3%",
    paddingVertical: "3%",
    marginVertical: "3%",
  },
  profileButton: {
    backgroundColor: "teal",
    alignItems: "center",
    width: "70%",
    height: 40,
    borderRadius: 20,
    marginVertical: 10,
    justifyContent: "center",
  },
  profileButtonText: {
    fontWeight: "800",
  },
  // ------------
  // homeScreen:

  homeToProfile: {
    top: 40,
    right: 10,
    position: "absolute",
  },
  homeButton: {
    borderRadius: 10,
    padding: 10,
    width: "50%",
    marginVertical: 5,

    alignSelf: "center",
  },
  homeButtonText: {
    fontSize: 20,
    textAlign: "center",
  },
  // take/giveScreen:
  showTransactionDone: {
    justifyContent: "center",
    alignSelf: "center",
    width: "50%",
  },
  showTransactionDoneText: {
    textDecorationLine: "none",
    fontSize: 13,
    textAlign: "left",
  },
  // noTransactions:
  noTransactions: {
    flex: 1,
    width: "99%",
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 20,
  },
  noTransactionsText: {
    textAlign: "center",
  },
  // HistoryScreen:
  deteleHistoryButton: {
    borderRadius: 10,
    padding: 10,
    width: "auto",
    marginVertical: 5,
  },
});
