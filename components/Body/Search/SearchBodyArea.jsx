import { s } from "./SearchBodyArea.style";
import { View } from "react-native";
import { Stamp } from "../../Misc/Stamp";
import { SearchBar } from "../../SearchBar/SearchBar";
import { base } from "../../../components/Root/Root.style";

export function SearchBody({ onSubmitSearch }) {
  return (
    <View style={base.body}>
      <View style={s.root}>
        <SearchBar onSubmit={onSubmitSearch} />
        <View style={s.container}>
          <Stamp text={"bla bla bla"} />
          <Stamp text={"bla bla bla"} />
          <Stamp text={"bla bla bla"} />
          <Stamp text={"bla bla bla"} />
          <Stamp text={"bla bla bla"} />
          <Stamp text={"bla bla bla"} />
          <Stamp text={"bla bla bla"} />
        </View>
      </View>
    </View>
  );
}
