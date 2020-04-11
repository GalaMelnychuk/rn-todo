import React, { useState} from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

// import TodoList from './TodoList'




// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello baby!!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

let maxId = 100;

export default function App() {

  const [todos, setTodos] = useState([]);

  const addToDo = text => {
    const todo = {
      id: maxId++,
      text
    };
    setTodos(prevTodos => [...prevTodos, todo]);
    console.log('todo.text', todo)
  };

  const onDeleteTodo = todoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    
    <>
    
      <TodoEditor onSave={addToDo} />
        <TodoList todos={todos} onDeleteTodo={onDeleteTodo} />
    </>
  );
};
