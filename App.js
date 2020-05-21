import React, { useState } from "react";
import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateNewTaskScreen from "./src/screens/CreateNewTaskScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import TaskListScreen from "./src/screens/TaskListScreen";

let maxId = 100;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [todos, setTodos] = useState([
    { id: "1", title: "to learn React Native" },
    { id: "2", title: "to run" },
  ]);

  const addToDo = (text) => {
    const todo = {
      id: maxId++,
      title: text,
    };
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const updateTodo = (id, text) => {
    setTodos((prevState) =>
      prevState.map((task) => {
        if (task.id === id) {
          task.title = text;
        }
        return task;
      })
    );
  };

  const onDeleteTodo = (todoId) => {
    const todo = todos.find((t) => t.id === todoId);
    Alert.alert(
      `Deleting task`,
      `Do you really want to delete task "${todo.title}"?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () =>
            setTodos((prevTodos) =>
              prevTodos.filter((todo) => todo.id !== todoId)
            ),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Task List"> */}
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
      >
        {/* <Stack.Screen name="Create New Task">
          {(props) => <CreateNewTaskScreen {...props} onSave={addToDo} />}
        </Stack.Screen> */}
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons
                name="ios-list-box"
                size={focused ? 42 : 40}
                color={focused ? "#ff1493" : "#808080"}
              />
            ),
          }}
          name="List"
          component={(props) => (
            <TaskListScreen
              {...props}
              todos={todos}
              onUpdateTodoInGeneralState={updateTodo}
              onDeleteTodo={onDeleteTodo}
            />
          )}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <Ionicons
                name="ios-add-circle"
                size={focused ? 42 : 40}
                color={focused ? "#ff1493" : "#808080"}
              />
            ),
          }}
          name="Create"
          component={(props) => (
            <CreateNewTaskScreen {...props} onSave={addToDo} />
          )}
        />

        {/* <Stack.Screen name="Task List">
          {(props) => (
            <TaskListScreen
              {...props}
              todos={todos}
              onUpdateTodoInGeneralState={updateTodo}
              onDeleteTodo={onDeleteTodo}
            />
          
        </Stack.Screen> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
