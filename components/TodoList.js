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

let maxId = 100;

const TodoList = ({ todos, onDeleteTodo }) => {
  // return (<ul>
  //           {todos.map(({ id, text }) => (
  //             <li key={maxId++}>
  //               <span>{text}</span>
  //               <button onClick={() => onDeleteTodo(id)}>Delete</button>
  //             </li>
  //           ))}
  //         </ul>)
  return (
    <View style={{ height: "80%", paddingTop: 50, paddingBottom: 50 }}>
      <FlatList
        keyExtractor={todo => todo.id}
        data={todos}
        renderItem={({item})  => (
          <View style={{ marginHorizontal: 10 }}>
            <Text
              style={{
                marginBottom: 10
              }}
            >
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
