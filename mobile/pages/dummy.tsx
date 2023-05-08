import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
  isEnglish: boolean;
}

/** Component for Dummy Page */
const Dummy = ({isEnglish, setIsEnglish} : Props) => {
  return (
    <View>
      <StatusBar style="auto" />
      <Text style={styles.headerText}>{isEnglish ? "Done!" : "¡Terminado!"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261CA6',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 20,
    color: '#FFFFFF',
    textAlign: 'center'
  },
});

export default Dummy;