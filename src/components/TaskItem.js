import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import EditModal from "../components/EditModal";
import { styles } from "../styles/styles";
import AppCard from "../components/ui/AppCard";

const TaskItem = ({ item, onDeleteTodo, onUpdateTodoInGeneralState }) => {
  const [showModal, setShowModal] = useState(false);

  const saveHandler = async (text) => {
    await onUpdateTodoInGeneralState(item.id, text);
    setShowModal(false);
  };
  return (
    <AppCard>
      <EditModal
        value={item.title}
        showModal={showModal}
        onSaveUpdates={saveHandler}
        onCancelModal={() => setShowModal(false)}
      />
      <TouchableOpacity style={styles.todoItem} onPress={() => setShowModal(true)}>
        <Text style={styles.todoDesc}>{item.title}</Text>
        <TouchableOpacity
          onPress={() => onDeleteTodo(item.id)}
          style={styles.btnDel}
        >
          <Text style={styles.btnDelText}>Delete!</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </AppCard>
  );
};

export default TaskItem;
