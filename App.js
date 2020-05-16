import React, { useState } from "react";
import { StyleSheet, ImageBackground, View, TextInput } from "react-native";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import {styles} from "./components/styles"

let maxId = 100;

const image = {uri: "https://i.pinimg.com/236x/44/bc/55/44bc55c1d5154d81bacc6f87a73a779e.jpg"};

export default function App() {
  const [todos, setTodos] = useState([]);

  const addToDo = (text) => {
    const todo = {
      id: maxId++,
      text,
    };
    setTodos((prevTodos) => [...prevTodos, todo]);
    console.log("todo.text", todo);
  };

  const onDeleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <ImageBackground source={image} style={styles.image}>
    <View style={styles.container}>
      
      <TodoEditor onSave={addToDo} />
      <TodoList todos={todos} onDeleteTodo={onDeleteTodo} />
     
    </View>
     </ImageBackground>
  );
}
