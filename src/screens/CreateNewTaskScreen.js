import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Image,
  Keyboard,
  Button,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

import { styles } from "../components/styles";

const CreateNewTaskScreen = ({ onSave, navigation }) => {
  const [todoText, setTodoText] = useState("");

  const submitHeandler = (e) => {
    if (todoText.trim()) {
      onSave(todoText);
      setTodoText("");
    } else {
      Alert.alert(
        `Please, enter you task. For example "to study React Native" :)`
      );
    }
  };

  return (
    <>
      <View style={styles.editorContainer}>
        <TextInput
          autoCapitalize={"none"}
          autoCorrect={false}
          style={styles.input}
          onChangeText={setTodoText}
          value={todoText}
          placeholder="Enter your task..."
        />
        <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="rgba(220, 20, 60, 1)"
          onPress={submitHeandler}
          style={styles.btnAdd}
        >
          <Text style={styles.btnAddText}>ADD</Text>
        </TouchableHighlight>
      </View>
      {/* <Button
        title="Check Todo List"
        onPress={() => navigation.navigate("Task List")}
      /> */}
      <View style={styles.imageWrap}>
        <Image style={styles.imageQuote} source={require("../../assets/quote-rn.jpg")} />
      </View>
    </>
  );
};

export default CreateNewTaskScreen;
