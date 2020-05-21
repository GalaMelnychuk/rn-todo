import React, { useState } from "react";
import { Alert, Modal, TextInput, Button, View } from "react-native";
import { styles } from "./styles";
import AppBackgroundForModal from "./ui/AppBackgroundForModal";

const EditModal = ({ showModal, onCancelModal, value, onSaveUpdates }) => {
  const [stateInModal, setStateInModal] = useState(value);

  const handlerSubmitChangesInModal = () => {
    if (!stateInModal.trim()) {
      Alert.alert(
        "Mistake!",
        `Your task has ${stateInModal.trim().length} symbols`
      );
    } else {
      onSaveUpdates(stateInModal);
      onCancelModal();
    }
  };

  return (
    <Modal animationType="slide" visible={showModal} transparent={true}>
      <AppBackgroundForModal>
        <View style={styles.modalView}>
          <TextInput
            style={styles.modalInput}
            autoCapitalize="none"
            autoCorrect={false}
            maxLength={64}
            placeholder="Please, enter new tittle for the task..."
            value={stateInModal}
            onChangeText={setStateInModal}
          />
          <View style={styles.modalBtns}>
            <View style={styles.modalBtnCnsl}>
              <Button title="Cancel" onPress={onCancelModal} />
            </View>
            <View style={styles.modalBtnSave}>
              <Button title="Save" onPress={handlerSubmitChangesInModal} />
            </View>
          </View>
        </View>
      </AppBackgroundForModal>
    </Modal>
  );
};

export default EditModal;
