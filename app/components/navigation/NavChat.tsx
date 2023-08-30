import React from "react";
import {useLocation} from "react-router-native";
import {Text, View, StyleSheet} from "react-native";

import AppBar from "../Appbar";
import chats from "../../utils/chats.json";
import {giveTime} from "../../utils/times";
const NavChat = () => {
  const router = useLocation();
  const filteredChat = chats.chats.find(
    (chat) => chat.id.toString() === router.pathname.replace("/", ""),
  );
  const lastMsj = filteredChat?.messages[filteredChat.messages.length - 1];

  const formatTime = giveTime(lastMsj);

  return (
    <>
      <AppBar />
      <View>
        {lastMsj?.role === "user" ? (
          <>
            <Text style={styles.textName}>{filteredChat?.user}</Text>
            <Text style={styles.textTime}>{formatTime}</Text>
          </>
        ) : (
          <>
            <Text style={styles.textName}>Thread Reply</Text>
            <Text style={styles.textTime}>with {filteredChat?.user}</Text>
          </>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  textName: {
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
  },
  textTime: {
    fontWeight: "300",
    fontSize: 12,
  },
});

export default NavChat;
