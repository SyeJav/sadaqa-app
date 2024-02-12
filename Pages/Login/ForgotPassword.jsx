import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { s } from "./Login.style";
import { Input } from "../../components/Input/Input";

export function ForgotPassword({ navigation }) {
  const onPressUpdate = () => {
    navigation.navigate("login");
  };

  return (
    <View style={s.root}>
      <Input placeholder="Enter Password" />
      <Input placeholder="Enter Password again" />

      <TouchableOpacity onPress={onPressUpdate} style={s.loginBtn}>
        <Text style={s.loginText}>UPDATE PASSWORD </Text>
      </TouchableOpacity>
    </View>
  );
}
