import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 10,
  },
  container: {
    height: 400,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  searchBar: {
    paddingBottom: 20,
  },
});
