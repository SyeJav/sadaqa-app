import { ScrollView, Text, View } from "react-native";
import { styles } from "./App.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Overview } from "./components/Overview/Overview";
import { Campaign } from "./components/Campaign/Campaign";

export default function App() {
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
            <Campaign />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={styles.footer}>
        <Text>footer</Text>
      </View>
    </>
  );
}
