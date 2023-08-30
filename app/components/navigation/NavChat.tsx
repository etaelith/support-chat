import React from "react";
import {useLocation} from "react-router-native";
import {Text} from "react-native";

import chats from "../../chats.json";
import AppBar from "../Appbar";
const NavChat = () => {
  const router = useLocation();
  const filteredChat = chats.chats.find(
    (chat) => chat.id.toString() === router.pathname.replace("/", ""),
  );

  /*  const handleBack = () => {
    window.location;
  }; */

  return (
    <>
      <AppBar />
      <Text>{filteredChat?.user}</Text>
    </>
  );
};

export default NavChat;
