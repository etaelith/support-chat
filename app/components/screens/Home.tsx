import React, {useEffect, useState} from "react";
import {View, FlatList} from "react-native";

import {Chat} from "../../types";
import chats from "../../utils/chats.json";
import Search from "../Search";
import ChatItem from "../ChatItem";
import {sortChatsByLastMessageTimestamp} from "../../utils/orderChats";

const Home = () => {
  const [chatsFilter, setChatsFilter] = useState<Chat[]>();

  useEffect(() => {
    const sortedChats = sortChatsByLastMessageTimestamp(chats.chats);

    setChatsFilter(sortedChats);
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
