import { Modal, StyleSheet, Text, View, Image } from 'react-native';
import checkboxImage from '../assets/checkbox-5.png'

interface Props {
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
  isEnglish: boolean;
}

const SubmissionPopup = ({ isEnglish, setIsEnglish} : Props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={false}>
        <View style={styles.centeredView}>
          <Text style={styles.modalText}>{isEnglish ? "Entry Submitted" : "Entrada enviada"}</Text>
          <Image style={styles.checkIcon} source={checkboxImage} />
          <Text style={[styles.modalText, { top: '-15%' }]}>{isEnglish ? "You've now logged 1,458 L total!" : "¡Ya has registrado 1.458 L en total!"}</Text>
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
