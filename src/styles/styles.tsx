import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // loginScreen:
  loginInput: {
    backgroundColor: "#defaed",
    width: "80%",
    height: 60,
    borderRadius: 10,
    fontSize: 18,
    color: "black",
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
    color: "teal",

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
  loginButtonText: {
    color: "#defaed",
  },
  // ----------------

  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  helpBox: {
    width: "80%",
    backgroundColor: "yellow",
    color: "midnightblue",
    borderRadius: 10,
    alignSelf: "center",
    marginVertical: 2,
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
  homeTransactionInput: {
    height: 70,
    fontSize: 22,
    textAlign: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "cyan",
    fontWeight: "bold",
    color: "black",
    marginVertical: 20,
  },
  helpExample: {
    backgroundColor: "gold",
    color: "black",
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
    backgroundColor: "yellow",
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 10,
  },
  Card: {
    borderRadius: 10,
    padding: 10,
    width: "auto",
    marginVertical: 5,

    color: "teal",
  },
  cardElementA: {
    color: "teal",
    fontSize: 30,
    textAlign: "center",
  },
  cardElementT: {
    color: "teal",
    fontSize: 10,

    textAlign: "center",
  },
  cardElementPN: {
    color: "teal",
    fontSize: 20,
    textAlign: "center",
  },
  cardContainer: {
    width: "80%",
    height: "95%",
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
    color: "white",
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
    backgroundColor: "yellow",
    color: "teal",
    alignSelf: "center",
  },
  homeButtonText: {
    color: "teal",
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
    color: "teal",
    textAlign: "left",
  },
  // noTransactions:
  noTransactions: {
    opacity: 0.3,
    flex: 1,
    width: "80%",
    marginVertical: "20%",
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 40,
    borderWidth: 2,
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
    backgroundColor: "#edfffe",
    color: "teal",
  },
});
