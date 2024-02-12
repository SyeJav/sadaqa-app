import { TextInput, View } from "react-native";
import { s } from "./Input.style";

export function Input({ placeholder, lable }) {
  return (
    <>
      <View style={s.inputView}>
        <TextInput style={s.inputText} placeholder={placeholder} />
      </View>
    </>
  );
}
