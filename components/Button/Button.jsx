import { Text, TouchableOpacity } from "react-native";
import { s } from "./Button.style";

export function Button({ children, customeStyle }) {
  return (
    <TouchableOpacity style={[s.button, customeStyle]}>
      <Text style={s.txt}>{children}</Text>
    </TouchableOpacity>
  );
}
