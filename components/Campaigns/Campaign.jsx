import { Card } from "../Cards/Card";
import { styles } from "./Campaign.style";
import { cardStyles } from "../Cards/Card.style";
import { ScrollView, Text, View } from "react-native";

export function Campaign({ campaign }) {
  function getTitle() {
    switch (campaign.type) {
      case "Masjid/Madarasa":
        return "Help building Mosque/Madarasa";
      case "Medical Aid":
        return "Help with Medical need";
      case "Food Aid":
        return "Feed the needy";
      case "Child Aid":
        return "Adopt a Child";
      case "Personal Aid":
        return "Help the Needy";
      case "Urgent":
        return "Urgent Help needed now";
    }
  }

  return (
    <View style={styles.campaign}>
      <View style={styles.campaignTitle}>
        <Text style={styles.campaignTitleTxt}>{getTitle()}</Text>
        <Text style={styles.campaignType}>{campaign.type}</Text>
      </View>
      <View style={styles.campaignDetails}>
        <Card campaign={campaign} />
      </View>
    </View>
  );
}
