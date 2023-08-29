import {useState} from "react";
import {View, TextInput, StyleSheet} from "react-native";

const Search = () => {
  const [text, setText] = useState("Hola");

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
    marginHorizontal: 20,
    marginVertical: 20,
    paddingLeft: 20,
    borderRadius: 20,
    height: 35,
  },
  input: {
    color: "#fff",
  },
});

export default Search;
