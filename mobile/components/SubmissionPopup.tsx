import { Modal, StyleSheet, Text, View, Image } from 'react-native';
import checkboxImage from '../assets/checkbox-5.png'

const SubmissionPopup = () => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}>
        <View style={styles.centeredView}>
          <Text style={styles.modalText}>Entry Submitted</Text>
          <Image style={styles.checkIcon} source={checkboxImage} />
          <Text style={[styles.modalText, { top: '-15%' }]}>You've now logged 1,458 L total!</Text>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#261CA6'
  },
  modalText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  checkIcon: {
    alignSelf: 'center',
    top: '-8%',
    maxWidth: '55%',
    maxHeight: '55%',
    resizeMode: 'contain'
  }
});

export default SubmissionPopup;
