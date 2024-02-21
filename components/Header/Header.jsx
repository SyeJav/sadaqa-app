import { headerStyles } from "./Header.style";
import { Text, View } from "react-native";
import { base } from "../../components/Root/Root.style";

export function HeaderArea() {
  return (
    <View style={base.header}>
      <View style={headerStyles.header}>
        <Text style={headerStyles.headerTxt}>KALB</Text>
        <Text style={[headerStyles.headerSubTxt, (paddingTop = 20)]}>
          “Sadaqah extinguishes sin as water extinguishes fire”
        </Text>
        <Text style={headerStyles.headerSubTxt}>(hadith, Tirmidhi)</Text>
      </View>
    </View>
  );
}
