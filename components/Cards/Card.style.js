import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
  cardItem: {},
  card: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderRadius: 20,
    height: 400,
  },
  img: {
    height: "40%",
    width: "100%",
  },
  body: {
    backgroundColor: "#EEF1F2",
    height: "60%",
  },
  cardTitle: {
    fontSize: 20,
  },
  cardSubTitle: {
    fontSize: 15,
  },

  cardSubTxt: {
    paddingTop: 15,
    paddingBottom: 10,
    fontSize: 15,
  },

  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
