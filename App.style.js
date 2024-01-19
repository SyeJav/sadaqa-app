import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 10,
  },
  header: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  headerTxt: {
    fontSize: 40,
    fontWeight: "bold",
  },
  headerSubTxt: {
    fontWeight: "bold",
  },
  body: {
    flex: 5,
  },
  footer: {
    backgroundColor: "white",
    height: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
