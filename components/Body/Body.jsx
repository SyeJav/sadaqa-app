import { bodyStyles } from "./Body.style";
import { Overview } from "./Overview/Overview";
import { Campaign } from "../Campaigns/Campaign";
import { ScrollView, View } from "react-native";
import { base } from "../../components/Root/Root.style";

export function BodyArea({ campaigns }) {
  function renderCampaignsList() {
    return campaigns.map((campaign) => (
      <Campaign key={campaign.id} campaign={campaign} />
    ));
  }
  return (
    <View style={base.body}>
      <View style={bodyStyles.root}>
        <Overview />
        <ScrollView>{renderCampaignsList()}</ScrollView>
      </View>
    </View>
  );
}
