import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  stamp: {
    margin: 15,
    height: 100,
    width: 100,
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
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 10,
  },
});
