import { Image, Text, TouchableOpacity, View } from "react-native";
import { cardStyles } from "./Card.style";
import mosq1 from "../../assets/mosq1.jpg";

export function Card({ campaign }) {
  return (
    <TouchableOpacity style={cardStyles.card}>
      <Image style={cardStyles.img} source={mosq1}></Image>
      <View style={cardStyles.body}>
        <Text style={cardStyles.cardTitle}>{campaign.title}</Text>
        <Text style={cardStyles.cardSubTitle}>{campaign.subTitle}</Text>
        <Text style={cardStyles.cardSubTxt}>{campaign.description}</Text>

        <Text style={cardStyles.cardFooter}></Text>
      </View>
    </TouchableOpacity>
  );
}
