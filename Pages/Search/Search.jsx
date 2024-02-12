import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { searchStyles } from "./Search.style";

export function Search() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={searchStyles.root}>
        <View>
          <Text>
            Welcome to search fsvf ef ef vefe e ef e frfbrehyt heht etyt jujt
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
