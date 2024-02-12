import { BodyArea } from "../../components/Body/Body";
import { Footer } from "../../components/Footer/Footer";
import { HeaderArea } from "../../components/Header/Header";
import { Route, useRoute } from "@react-navigation/native";

export function Home({ campaigns, navigation }) {
  return (
    <>
      <HeaderArea />
      <BodyArea campaigns={campaigns} />
      <Footer />
    </>
  );
}
