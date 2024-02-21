import { Footer } from "../../components/Footer/Footer";
import { HeaderArea } from "../../components/Header/Header";
import { BodyArea } from "../../components/Body/Body";
import { base } from "../../components/Root/Root.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

export function Base({ campaigns }) {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={base.container}>
          <HeaderArea />
          <BodyArea campaigns={campaigns} />
        </SafeAreaView>
      </SafeAreaProvider>
      <Footer />
    </>
  );
}
