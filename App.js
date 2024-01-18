import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { style } from "./App.style";

export default function App() {
  return (
    <View style={style.container}>
      <Text>Welcome to Kalb!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
