import React from "react";
import {StyleSheet, Text, View} from "react-native";

import AppBar from "../Appbar";

const NavLogin = () => {
  return (
    <>
      <AppBar />
      <Text>NavLogin</Text>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default NavLogin;
