import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Card.style";
import mosq1 from "../../assets/mosq1.jpg";

export function Card() {
  return (
    <TouchableOpacity style={styles.root}>
      <Image style={styles.img} source={mosq1}></Image>
      <View style={styles.body}>
        <Text style={styles.cardTitle}></Text>
        <Text style={styles.cardSubTxt}></Text>
        <Text style={styles.cardFooter}></Text>
      </View>
    </TouchableOpacity>
  );
}
