import { TouchableOpacity, View } from "react-native";
import { footerStyles } from "./Footer.style";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export function Footer() {
  return (
    <View style={footerStyles.footerIcons}>
      <TouchableOpacity>
        <Entypo name="home" size={24} color="#4AA567" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="heart" size={24} color="#4AA567" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="new-message" size={24} color="#4AA567" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="search" size={24} color="#4AA567" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="user" size={24} color="#4AA567" />
      </TouchableOpacity>
    </View>
  );
}
