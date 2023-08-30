import React from "react";
import {Text, View} from "react-native";

import AppBar from "../Appbar";

const NavHome = () => {
  return (
    <View>
      <Text style={{textAlign: "center"}}>Chat App</Text>
      <AppBar />
    </View>
  );
};

export default NavHome;
