import {Tabs} from "expo-router";

import {FilterJson} from "../utils/filterChat";

export default function MyComponent() {
  const chat = FilterJson();

  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen
        name="[id]"
        options={{title: `${chat?.user === undefined ? "Last User" : chat.user}`}}
      />
    </Tabs>
  );
}
