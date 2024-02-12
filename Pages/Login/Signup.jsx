import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { s } from "./Login.style";
import { Input } from "../../components/Input/Input";

export function Signup({ navigation }) {
  const onPressSignUp = () => {
    navigation.navigate("login");
  };

  return (
    <View style={s.root}>
      <Input placeholder="Enter Email" />
      <Input placeholder="Enter Password" />
      <Input placeholder="Enter Password again" />

      <TouchableOpacity onPress={onPressSignUp} style={s.loginBtn}>
        <Text style={s.loginText}>SIGNUP </Text>
      </TouchableOpacity>
    </View>
  );
}
