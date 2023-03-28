import * as React from 'react';
import {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';

const SubmissionPopup = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 3000);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <Text style={styles.modalText}>Entry submitted!</Text>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => showModal()}>
        <Text style={styles.textStyle}>Submit</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'top'
  },
  modalText: {
    marginBottom: 15,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
    top: '-35%'
  },
});

export default SubmissionPopup;
