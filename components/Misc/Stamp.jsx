import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./Stamp.style";
import { FontAwesome5 } from "@expo/vector-icons";

export function Stamp({ text }) {
  return (
    <TouchableOpacity style={s.stamp}>
      <Text style={s.txt}>{text}</Text>
      <FontAwesome5 name="mosque" size={24} color="black" />
    </TouchableOpacity>
  );
}
