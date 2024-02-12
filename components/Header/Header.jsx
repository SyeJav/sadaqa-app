import { headerStyles } from "./Header.style";
import { Text, View } from "react-native";

export function HeaderArea() {
  return (
    <View style={headerStyles.header}>
      <Text style={headerStyles.headerTxt}>KALB</Text>
      <Text style={[headerStyles.headerSubTxt, (paddingTop = 20)]}>
        “Sadaqah extinguishes sin as water extinguishes fire”
      </Text>
      <Text style={headerStyles.headerSubTxt}>(hadith, Tirmidhi)</Text>
    </View>
  );
}
