import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  campaign: {
    flex: 1,
    height: 500,
    paddingTop: 10,
  },
  campaignTitle: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  campaignTitleTxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4AA567",
  },
  campaignType: {
    fontSize: 15,
    fontWeight: "bold",
  },
  campaignDetails: {
    flex: 5,
  },
});
