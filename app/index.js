import {Text, View} from "react-native";
import Constants from "expo-constants";

import Home from "./components/screens/Home";

export default function Page() {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
      }}
    >
      <Text style={{textAlign: "center"}}>Chat App</Text>
      <Home />
    </View>
  );
}
