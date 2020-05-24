import React, {useState, useEffect, useCallback} from "react";
import { FlatList, View, Platform, Dimensions } from "react-native";
import { styles } from "../styles/styles";

import TaskItem from "../components/TaskItem";
import AppBackground from '../components/ui/AppBackground';

const TaskListScreen = ({
  todos,
  onDeleteTodo,
  onUpdateTodoInGeneralState,
}) => {
  
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
