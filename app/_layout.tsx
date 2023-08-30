import {Stack} from "expo-router";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
    </Stack>
  );
};

export default StackLayout;
