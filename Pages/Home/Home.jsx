import { BodyArea } from "../../components/Home/Body/Body";
import { Footer } from "../../components/Home/Footer/Footer";
import { HeaderArea } from "../../components/Home/Header/Header";

export function Home() {
  return (
    <>
      <HeaderArea />
      <BodyArea campaigns={campaignsList} />
      <Footer />
    </>
  );
}
