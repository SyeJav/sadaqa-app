import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  stamp: {
    marginBottom: 20,
    height: 90,
    width: 90,
    backgroundColor: "#ADBC9F",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  txt: {
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 10,
  },
});
