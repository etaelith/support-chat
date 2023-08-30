import {StyleSheet, View} from "react-native";

import AppBar from "../Appbar";

const NavHome = () => {
  return (
    <View style={styles.container}>
      <AppBar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
});

export default NavHome;
