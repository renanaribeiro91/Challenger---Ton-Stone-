import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes";
import { BagProvider } from "./src/Context/Bag";
import { useFonts, Anton_400Regular } from "@expo-google-fonts/anton";

export default function App() {
  let [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <BagProvider>
      <StatusBar style="light" backgroundColor="#000" translucent={true} />
      <Routes />
    </BagProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
