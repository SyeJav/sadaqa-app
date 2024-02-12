import { bodyStyles } from "./Body.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Overview } from "./Overview/Overview";
import { Campaign } from "../Campaigns/Campaign";
import { ScrollView, View } from "react-native";

export function BodyArea({ campaigns }) {
  function renderCampaignsList() {
    return campaigns.map((campaign) => (
      <Campaign key={campaign.id} campaign={campaign} />
    ));
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={bodyStyles.root}>
        <View>
          <Overview />
          <ScrollView>{renderCampaignsList()}</ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
