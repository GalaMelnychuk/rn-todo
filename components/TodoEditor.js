import React, { useState } from "react";
import {
  TextInput,
  ImageBackground,
  View,
  StyleSheet,
  Text,
  Keyboard,
  Alert,
  TouchableOpacity,
} from "react-native";

import {styles} from "./styles";

const TodoEditor = ({ onSave }) => {
  const [todoText, setTodoText] = useState("");

  const submitHeandler = (e) => {
    onSave(todoText);
    setTodoText("");
  };

  const alertSearch = () => {
    Keyboard.dismiss();
    Alert.alert(
      "Save?",
      todoText,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => submitHeandler() },
      ],
      { cancelable: false }
    );
  };

  return (
    <View>
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        style={styles.input}
        onChangeText={setTodoText}
      />
      <TouchableOpacity onPress={() => alertSearch()} style={styles.button}>
        <Text style={styles.buttonTitle}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
//   return (
//     <form onSubmit={submitHeandler}>
//       <input type="text" value={todoText} onChange={onChangetodoText} />
//       <button type="submit">Save</button>
//     </form>
//   );

// };

export default TodoEditor;

