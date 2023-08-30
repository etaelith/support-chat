import React from "react";
import {StyleSheet, View} from "react-native";
import {useLocation} from "react-router-native";

import NavHome from "./navigation/NavHome";
import NavLogin from "./navigation/NavLogin";
import NavChat from "./navigation/NavChat";

const Navigation = () => {
  const router = useLocation();

  return (
    <View style={styles.container}>
      {router.pathname === "/" ? (
        <NavHome />
      ) : router.pathname === "/signin" ? (
        <NavLogin />
      ) : (
        <NavChat />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingVertical: 15,
  },
});

export default Navigation;
