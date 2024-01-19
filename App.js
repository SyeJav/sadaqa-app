import { ScrollView, Text, View } from "react-native";
import { styles } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Overview } from "./components/Overview/Overview";
import { Campaign } from "./components/Campaign/Campaign";
import { Footer } from "./components/Footer/Footer";
import { useState } from "react";

export default function App() {
  const [campaignsList, setCampaignsList] = useState([
    {
      id: 1,
      title: "Masjid-e-Mohammadia",
      subTitle: "Vijayawada",
      description:
        "Rajak sat on the porch of his wooden house in Kampung Dupa, a small village nestled in the heart of Desa Compang Soba, surrounded by the lush landscapes of Kecamatan Elar in Kabupaten Manggarai Timur, East  Nusa Tenggara, Indonesia. He pondered his communitys shared dream: to have their own mosque.",
      type: "Masjid/Madarasa",
      funded: 100,
      target: 100000,
    },
    {
      id: 2,
      title: "Land purchase for Madrasa",
      subTitle: "Guntur",
      description:
        "Rajak sat on the porch of his wooden house in Kampung Dupa, a small village nestled in the heart of Desa Compang Soba, surrounded by the lush landscapes of Kecamatan Elar in Kabupaten Manggarai Timur, East  Nusa Tenggara, Indonesia. He pondered his communitys shared dream: to have their own mosque.",
      type: "Urgent",
      funded: 1000,
      target: 230000,
    },
    {
      id: 3,
      title: "Urgent Medical aid needed",
      subTitle: "Madurai",
      description:
        "Rajak sat on the porch of his wooden house in Kampung Dupa, a small village nestled in the heart of Desa Compang Soba, surrounded by the lush landscapes of Kecamatan Elar in Kabupaten Manggarai Timur, East  Nusa Tenggara, Indonesia. He pondered his communitys shared dream: to have their own mosque.",
      type: "Medical Aid",
      funded: 24000,
      target: 500000,
    },
    {
      id: 4,
      title: "Urgent Food and Grocery needed",
      subTitle: "Gaza, Palestine",
      description:
        "Rajak sat on the porch of his wooden house in Kampung Dupa, a small village nestled in the heart of Desa Compang Soba, surrounded by the lush landscapes of Kecamatan Elar in Kabupaten Manggarai Timur, East  Nusa Tenggara, Indonesia. He pondered his communitys shared dream: to have their own mosque.",
      type: "Food Aid",
      funded: 60000,
      target: 100000,
    },
  ]);

  function renderCampaignsList() {
    return campaignsList.map((campaign) => (
      <Campaign key={campaign.id} campaign={campaign} />
    ));
  }

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerTxt}>KALB</Text>
        <Text style={[styles.headerSubTxt, (paddingTop = 20)]}>
          “Sadaqah extinguishes sin as water extinguishes fire”
        </Text>
        <Text style={styles.headerSubTxt}>(hadith, Tirmidhi)</Text>
      </View>
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          <View style={styles.body}>
            <Overview />
            <ScrollView>{renderCampaignsList()}</ScrollView>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <Footer />
      </View>
    </>
  );
}
