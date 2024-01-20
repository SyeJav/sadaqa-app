import { TouchableOpacity, View } from "react-native";
import { footerStyles } from "./Footer.style";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Search } from "../../Search/Search";

export function Footer() {
  function goToSearch() {
    return (
      <View>
        <Search />
      </View>
    );
  }
  return (
    <View style={footerStyles.root}>
      <TouchableOpacity>
        <Entypo name="home" size={24} color="#4AA567" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="heart" size={24} color="#4AA567" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Entypo name="new-message" size={24} color="#4AA567" />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToSearch}>
        <FontAwesome5 name="search" size={24} color="#4AA567" />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome5 name="user" size={24} color="#4AA567" />
      </TouchableOpacity>
    </View>
  );
}
