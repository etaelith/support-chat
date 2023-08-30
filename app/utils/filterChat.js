import {usePathname} from "expo-router";

import chats from "./chats.json";
export function FilterJson() {
  const pathname = usePathname();
  const filteredChat = chats.chats.find((chat) => chat.id.toString() === pathname.replace("/", ""));

  return filteredChat;
}
