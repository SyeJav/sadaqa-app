import { TouchableOpacity, View } from "react-native";
import { footerStyles } from "./Footer.style";
import { Entypo } from "@expo/vector-icons";
import { base } from "../../components/Root/Root.style";
import { FontAwesome5 } from "@expo/vector-icons";
import { navigation, useNavigation } from "@react-navigation/native";

export function Footer() {
  const navigation = useNavigation();
  const iconSize = 26;
  const iconColor = "#4AA567";
  return (
    <View style={base.footer}>
      <View style={footerStyles.root}>
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Entypo name="home" size={iconSize} color={iconColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("favorite")}>
          <Entypo name="heart" size={iconSize} color={iconColor} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="new-message" size={44} color={iconColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("search")}>
          <FontAwesome5 name="search" size={iconSize} color={iconColor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("profile")}>
          <FontAwesome5 name="user" size={iconSize} color={iconColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
