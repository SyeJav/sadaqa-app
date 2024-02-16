import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { searchStyles } from "./Search.style";
import { BodyArea } from "../../components/Body/Body";
import { Footer } from "../../components/Footer/Footer";
import { HeaderArea } from "../../components/Header/Header";
import { SearchBody } from "../../components/Body/Search/SearchBodyArea";
import { base } from "../../components/Root/Root.style";

export function Search({ campaigns, onSubmitSearch }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={base.container}>
        <HeaderArea />
        <SearchBody campaigns={campaigns} onSubmitSearch={onSubmitSearch} />
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
