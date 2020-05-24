import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { fetchTodos } from "./services/services";
import TaskListScreen from "./src/screens/TaskListScreen";
import CreateNewTaskScreen from "./src/screens/CreateNewTaskScreen";
import AppLoader from "./src/components/ui/AppLoader";

async function loadApplication() {
  await Font.loadAsync({
    cabin600: require("./assets/fonts/cabin-v14-latin-600.ttf"),
    cabin700: require("./assets/fonts/cabin-v14-latin-700.ttf"),
  });
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todos, setTodos] = useState(null);

  const loadTodos = async () =>
    await fetchTodos()
      .then((res) => res.json())
      .then((data) => {
        setTodos(Object.keys(data).map((key) => ({ ...data[key], id: key })));
      });

  useEffect(() => {
    loadTodos();
  }, []);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  const addToDo = async (title) => {
    const response = await fetch(
      "https://rn-todo-3e4cd.firebaseio.com/todos.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      }
    );
    const data = await response.json();

    const todo = {
      id: data.name,
      title: title,
    };
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const updateTodo = async (id, title) => {
    await fetch(`https://rn-todo-3e4cd.firebaseio.com/todos/${id}.json`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    await setTodos((old) =>
      old.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
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
          onPress: async () => {
            await fetch(
              `https://rn-todo-3e4cd.firebaseio.com/todos/${todoId}.json`,
              {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
              }
            );
            await setTodos((old) => old.filter((todo) => todo.id !== todoId));
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: true,
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-list-box"
                size={focused ? 34 : 36}
                color={focused ? "#00ced1" : "#dcdcdc"}
              />
            ),
          }}
          name="List"
          component={() =>
            todos ? (
              <TaskListScreen
                todos={todos}
                onUpdateTodoInGeneralState={updateTodo}
                onDeleteTodo={onDeleteTodo}
              />
            ) : (
              <AppLoader />
            )
          }
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="ios-add-circle"
                size={focused ? 34 : 36}
                color={focused ? "#00ced1" : "#dcdcdc"}
              />
            ),
          }}
          name="Create"
          component={() => <CreateNewTaskScreen onSave={addToDo} />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
