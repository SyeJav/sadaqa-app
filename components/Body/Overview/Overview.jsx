import { styles } from "./Overview.style";
import { Text, View } from "react-native";

export function Overview() {
  return (
    <View style={styles.root}>
      <View style={styles.sect1}>
        <Text style={styles.sectTxt}>Active Campaigns</Text>
        <Text style={styles.sectSubTxt}>23</Text>
      </View>
      <View style={styles.sect2}>
        <Text style={styles.sectTxt}>Todays sadaqa</Text>
        <Text style={styles.sectSubTxt}>230,000</Text>
      </View>
    </View>
  );
}
