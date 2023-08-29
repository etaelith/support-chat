import React, {useEffect, useState} from "react";
import {View, FlatList} from "react-native";

import {Chat} from "../../types";
import chats from "../../chats.json";
import Search from "../Search";

import ChatItem from "./ChatItem";

const Home = () => {
  const [chatsFilter, setChatsFilter] = useState<Chat[]>();

  useEffect(() => {
    setChatsFilter(chats.chats);
  }, []);

  return (
    <View>
      <Search />
      <FlatList
        data={chatsFilter}
        keyExtractor={(item) => item.lastMessageTimestamp}
        renderItem={({item}) => <ChatItem key={item.lastMessageTimestamp} chat={item} />}
      />
    </View>
  );
};

export default Home;
