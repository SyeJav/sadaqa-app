import { Text, View } from "react-native";
import { s } from "./Stamp.style";
export function Stamp({ text }) {
  return (
    <>
      <View style={s.stamp}>
        <Text style={s.txt}>{text}</Text>
      </View>
    </>
  );
}
