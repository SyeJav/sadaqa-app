import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
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
});
