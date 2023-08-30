import {Text, View} from "react-native";
import Constants from "expo-constants";
import {NativeRouter, Routes, Route} from "react-router-native";

import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Chat from "./components/screens/Chat";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <NativeRouter>
      <View
        style={{
          marginTop: Constants.statusBarHeight,
          flexGrow: 1,
        }}
      >
        <Navigation />
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route element={<Login />} path="/signin" />
          <Route element={<Chat />} path=":id" />
        </Routes>
      </View>
    </NativeRouter>
  );
}
