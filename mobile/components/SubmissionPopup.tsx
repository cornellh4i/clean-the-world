import { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';
import checkboxImage from '../assets/checkbox-5.png'

const SubmissionPopup = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
          <Image style={styles.checkIcon} source={checkboxImage}/>
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
    top: 0
  },
  checkIcon: {
    maxWidth: '60%',
    maxHeight: '60%',
    resizeMode: 'contain',
  }
});

export default SubmissionPopup;
