import { Card } from "../Card/Card";
import { styles } from "./Campaign.style";
import { ScrollView, Text, View } from "react-native";

export function Campaign() {
  return (
    <>
      <View style={styles.campaignTitle}>
        <Text style={styles.campaignTitleTxt}>Build a Mosque</Text>
        <Text style={styles.campaignTitleStatus}>New Campaign</Text>
      </View>
      <Card />
    </>
  );
}
