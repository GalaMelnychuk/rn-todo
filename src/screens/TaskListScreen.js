import React, { useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import AppBackground from "../components/ui/AppBackground";
import { styles } from "../components/styles";
import TaskItem from "../components/TaskItem";

const TaskListScreen = ({
  todos,
  onDeleteTodo,
  navigation,
  onUpdateTodoInGeneralState,
}) => {
  return (
    <AppBackground>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Create New Task")}
        style={styles.btnToCreateTask}
      > */}
  
      <View style={styles.listContainer}>
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
