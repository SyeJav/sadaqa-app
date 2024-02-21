import { Image, Text, TouchableOpacity, View } from "react-native";
import { cardStyles } from "./Card.style";
import mosq1 from "../../assets/mosq1.jpg";
import * as Progress from "react-native-progress";
import { Button } from "../Button/Button";

export function Card({ campaign }) {
  function getPercentage() {
    return (campaign.funded / campaign.target) * 100;
  }
  return (
    <View style={cardStyles.card}>
      <Image style={cardStyles.img} source={mosq1}></Image>
      <View style={cardStyles.body}>
        <Text style={cardStyles.cardTitle}>{campaign.title}</Text>
        <Text style={cardStyles.cardSubTitle}>{campaign.subTitle}</Text>
        <Text style={cardStyles.cardSubTxt}>{campaign.description}</Text>

        <View style={cardStyles.cardFooter}>
          <Image></Image>
          <Progress.Bar
            progress={getPercentage()}
            width={200}
            color={"#4AA567"}
          />
        </View>
        <Button>{"Donate"}</Button>
      </View>
    </View>
  );
}
