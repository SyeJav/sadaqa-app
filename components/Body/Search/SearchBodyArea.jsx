import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./SearchBodyArea.style";
import { ScrollView, View } from "react-native";
import { Overview } from "../Overview/Overview";
import { Stamp } from "../../Misc/Stamp";
import { SearchBar } from "../../SearchBar/SearchBar";

export function SearchBody({ onSubmitSearch }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.root}>
        <View style={s.searchBar}>
          <SearchBar onSubmit={onSubmitSearch} />
        </View>
        <View style={s.container}>
          <Stamp text={"bla bla bla"} />
          <Stamp text={"bla bla bla"} />
          <Stamp text={"bla bla bla"} />
          <Stamp text={"bla bla bla"} />
          <Stamp text={"bla bla bla"} />
          <Stamp text={"bla bla bla"} />
          <Stamp text={"bla bla bla"} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
