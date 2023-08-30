import {ScrollView, Text, StyleSheet, SafeAreaView, View} from "react-native";

import StyledTextInput from "../StyledTextInput";
import {FilterJson} from "../../utils/filterChat";
const Chat = () => {
  const chat = FilterJson();
  const formattedTime = (timestamp: string) =>
    new Date(timestamp).toLocaleString("es-ES", {
      hour: "numeric",
      minute: "numeric",
    });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.containerScroll}>
        {chat?.messages.map((msj) => {
          return (
            <View key={msj.id} style={msj.role === "user" ? styles.user : styles.agent}>
              <Text style={styles.text}>{msj.message}</Text>
              <Text style={styles.time}>{formattedTime(msj.timestamp)}</Text>
            </View>
          );
        })}
      </ScrollView>
      <StyledTextInput />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  containerScroll: {
    marginBottom: 25,
  },
  text: {
    fontSize: 12,
    lineHeight: 18,
  },
  time: {
    fontSize: 10,
    fontWeight: "300",
    alignSelf: "flex-end",
  },
  user: {
    alignSelf: "flex-start",
    width: "80%",
    margin: 5,
    backgroundColor: "rgba(66, 135, 245,0.2)",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  agent: {
    alignSelf: "flex-end",
    width: "80%",
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "rgba(59, 232, 16,0.2)",
  },
});

export default Chat;
