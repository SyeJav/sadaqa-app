import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./SearchBodyArea.style";
import { ScrollView, View } from "react-native";
import { Overview } from "../Overview/Overview";
import { Stamp } from "../../Misc/Stamp";

export function SearchBody() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <View>
          <Overview />
          <ScrollView>
            <View style={s.container}>
              <Stamp text={"bla bla bla"} />
              <Stamp text={"bla bla bla"} />
              <Stamp text={"bla bla bla"} />
              <Stamp text={"bla bla bla"} />
              <Stamp text={"bla bla bla"} />
              <Stamp text={"bla bla bla"} />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
