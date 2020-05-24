import React, {useState, useEffect, useCallback} from "react";
import { FlatList, View, Platform, Dimensions } from "react-native";
import { styles } from "../styles/styles";
import {fetchTodos} from '../../services/services'
import TaskItem from "../components/TaskItem";
import AppBackground from '../components/ui/AppBackground';


const TaskListScreen = ({
  todos,
  onDeleteTodo,
  onUpdateTodoInGeneralState,
}) => {

  // const fetchTodos = async () => {
  //   const response = await fetch("https://rn-todo-3e4cd.firebaseio.com/todos.json", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   });
    // const data = await response.json();
    // const allTodos = Object.keys(data).map(key => ({...data[key], id: key}));
    // return allTodos;
    // console.log('allTodos', allTodos)
  // };
  
  // const allTodos = async () => await fetchTodos().then(res => res.json).then(data => Object.keys(data).map(key => ({...data[key], id: key})) )
  // const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

  // useEffect(() => {
  //   loadTodos()
  // }, []);

  
  return (
    <AppBackground>
      <View style={{...styles.listContainer, ...Platform.select({
      ios: {
        paddingHorizontal: 30,
        paddingVertical: 20,
      },
      android: {
        paddingHorizontal: 5,
        paddingVertical: 20,
        marginHorizontal: 7,
      },
    }),}}>
        <FlatList
          keyExtractor={(todo) => todo.id}
          data={todos}
          renderItem={({ item }) => (
            <TaskItem
              item={item}
              onDeleteTodo={onDeleteTodo}
              onUpdateTodoInGeneralState={onUpdateTodoInGeneralState}
            />
          )}
        />
      </View>
    </AppBackground>
  );
};

export default TaskListScreen;
