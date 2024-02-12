import { SafeAreaView, View } from "react-native";
import { styles } from "./App.style";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Login } from "./Pages/Login/Login";
import { ForgotPassword } from "./Pages/Login/ForgotPassword";
import { Signup } from "./Pages/Login/Signup";
import { Home } from "./Pages/Home/Home";
import { Search } from "./Pages/Search/Search";
import { User } from "./Pages/Accounts/User";

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

  const Stack = createNativeStackNavigator();
  const navTheme = {
    colors: {
      background: "transparent",
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false, animation: "fade" }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home">
          {() => <Home campaigns={campaignsList} />}
        </Stack.Screen>
        <Stack.Screen name="search">
          {() => <Search campaigns={campaignsList} />}
        </Stack.Screen>
        <Stack.Screen name="user" component={User} />
        <Stack.Screen name="forgotpassword" component={ForgotPassword} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
