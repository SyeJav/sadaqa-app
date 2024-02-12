import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { s } from "./Login.style";
import { Input } from "../../components/Input/Input";

export function Login({ navigation }) {
  const onPressLogin = () => {
    navigation.navigate("home");
  };
  const onPressForgotPassword = () => {
    // Do something about forgot password operation
    navigation.navigate("forgotpassword");
  };
  const onPressSignUp = () => {
    // Do something about signup operation
    navigation.navigate("signup");
  };
  return (
    <View style={s.root}>
      <Input placeholder="Enter email" />
      <Input placeholder="Enter Password" />

      <TouchableOpacity onPress={onPressForgotPassword}>
        <Text style={s.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLogin} style={s.loginBtn}>
        <Text style={s.loginText}>LOGIN </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSignUp}>
        <Text style={s.inputText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
