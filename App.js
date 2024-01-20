import { View } from "react-native";
import { styles } from "./App.style";
import { Footer } from "./components/Home/Footer/Footer";
import { HeaderArea } from "./components/Home/Header/Header";
import { BodyArea } from "./components/Home/Body/Body";
import { useState } from "react";

export default function App() {
  const [campaignsList, setCampaignsList] = useState([
    {
      id: 1,
      title: "Masjid-e-Mohammadia",
      subTitle: "Vijayawada",
      description:
        "Rajak sat on the porch of his wooden house in Kampung Dupa, a small village nestled in the heart of Desa Compang Soba, surrounded by the lush landscapes of Kecamatan Elar in Kabupaten Manggarai Timur, East  Nusa Tenggara, Indonesia. He pondered his communitys shared dream: to have their own mosque.",
      type: "Masjid/Madarasa",
      funded: 100,
      target: 100000,
    },
    {
      id: 2,
      title: "Help to build Gaza",
      subTitle: "Gaza",
      description:
        "Rajak sat on the porch of his wooden house in Kampung Dupa, a small village nestled in the heart of Desa Compang Soba, surrounded by the lush landscapes of Kecamatan Elar in Kabupaten Manggarai Timur, East  Nusa Tenggara, Indonesia. He pondered his communitys shared dream: to have their own mosque.",
      type: "Urgent",
      funded: 1000,
      target: 230000,
    },
    {
      id: 3,
      title: "Urgent Medical aid needed",
      subTitle: "Madurai",
      description:
        "Rajak sat on the porch of his wooden house in Kampung Dupa, a small village nestled in the heart of Desa Compang Soba, surrounded by the lush landscapes of Kecamatan Elar in Kabupaten Manggarai Timur, East  Nusa Tenggara, Indonesia. He pondered his communitys shared dream: to have their own mosque.",
      type: "Medical Aid",
      funded: 24000,
      target: 500000,
    },
    {
      id: 4,
      title: "Urgent Food and Grocery needed",
      subTitle: "Gaza, Palestine",
      description:
        "Rajak sat on the porch of his wooden house in Kampung Dupa, a small village nestled in the heart of Desa Compang Soba, surrounded by the lush landscapes of Kecamatan Elar in Kabupaten Manggarai Timur, East  Nusa Tenggara, Indonesia. He pondered his communitys shared dream: to have their own mosque.",
      type: "Food Aid",
      funded: 60000,
      target: 100000,
    },
  ]);

  return (
    <>
      <HeaderArea />
      <BodyArea campaigns={campaignsList} />
      <Footer />
    </>
  );
}
