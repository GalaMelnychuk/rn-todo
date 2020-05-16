import React from "react";
import {
  FlatList,
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Alert, Button
} from "react-native";
import { styles } from "./styles";

let maxId = 100;

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
      
        keyExtractor={todo => todo.id}
        data={todos}
        renderItem={({item})  => (
          <View style={styles.listTodos}>
            <Text>
              {item.text}
            </Text>
            <Button
        onPress={() => onDeleteTodo(item.id)}
        title="Delete"
        color="#841584"
      />
          </View>
        )}
      />
    </View>
  );
};

export default TodoList;
