import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import {useNavigate} from "react-router-native";

import {Chat} from "../types";
import {formatTimeAgo} from "../utils/times";
interface Item {
  chat: Chat;
}
const ChatItem = ({chat}: Item) => {
  const {message, timestamp} = chat.messages.slice(-1)[0];
  const timeFormat = new Date(timestamp).getTime();
  const formatTime = formatTimeAgo(timeFormat);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`${chat.id}`);
  };

  return (
    <TouchableOpacity style={styles.chatItem} onPress={() => handleNavigate()}>
      <View style={styles.chatInfo}>
        <Text style={styles.chatName}> {chat.agent}</Text>
        <Text style={styles.lastMessage}>{message}</Text>
      </View>
      <Text style={styles.timestamp}>{formatTime}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatInfo: {
    flex: 1,
    marginLeft: 10,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 14,
    color: "#888",
  },
  timestamp: {
    fontSize: 12,
    color: "#888",
  },
});

export default ChatItem;
