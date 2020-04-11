import React, { useState } from "react";
import { TextInput, StyleSheet, Button, Keyboard, Alert } from "react-native";

const TodoEditor = ({ onSave }) => {
  const [todoText, setTodoText] = useState("");

  const submitHeandler = e => {
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
    <>
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        style={styles.input}
        onChangeText={setTodoText}
      />
      <Button
        onPress={() => alertSearch()}
        title="Save"
        color="#841584"
      />
    </>
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


const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a52a2a",
  },
  buttonTitle: {
    ...Platform.select({
      ios: {
        color: "#f0f8ff",
        fontSize: 12,
      },
      android: {
        color: "grey",
        fontSize: 20,
      },
      default: {
        // other platforms, web for example
        backgroundColor: "blue",
      },
    }),

    textTransform: "uppercase",
  },
  input: {
    marginTop: 80,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "blue",
    height: 40,
    marginHorizontal: 20,
    color: "red",
  },
});
