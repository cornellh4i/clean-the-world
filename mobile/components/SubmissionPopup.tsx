import { Modal, StyleSheet, Text, View, Image } from 'react-native';
import checkboxImage from '../assets/checkbox-5.png'

const SubmissionPopup = () => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}>
        <View style={styles.centeredView}>
          <Text style={styles.modalText}>Entry submitted!</Text>
          <Image style={styles.checkIcon} source={checkboxImage} />
        </View>
      </Modal>
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
  confirmButton: {
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    margin: 20,
    marginLeft: 15,
    marginRight: 15,
    flex: 1
  },
  buttonText: {
    fontFamily: 'Verdana',
    fontSize: 18,
    color: '#ffffff'
  },
  // buttonOpen: {
  //   backgroundColor: '#F194FF',
  // },
  // buttonClose: {
  //   backgroundColor: '#2196F3',
  // },
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
