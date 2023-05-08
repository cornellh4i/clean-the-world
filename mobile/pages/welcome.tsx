import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { ModalScreenList } from '../router';
import { Screen } from '../components/Screen';

/** Component for Welcome Page */
interface Props {
  navigation: StackNavigationProp<ModalScreenList>;
  firstName: string;
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
  isEnglish: boolean;
}

const Welcome = ({ navigation, firstName, isEnglish, setIsEnglish }: Props) => {
  const onPressNextPage = () => navigation.navigate('DataEntries');

  return (
    <Screen isEnglish={isEnglish} setIsEnglish={setIsEnglish}>
      <StatusBar style="auto" />
      <Text style={styles.headerText}>{isEnglish ? "Hi, " + firstName + "! You haven't entered any data today yet." : "¡Hola, " + firstName + "! Todavía no has introducido ningún dato. "}</Text>
      <TouchableOpacity style={styles.entryButton}
        onPress={onPressNextPage}>
        <Text style={styles.buttonText}>{isEnglish ? "+  Add Today's Entry" : "+  Agregar la entrada de hoy"}</Text>
      </TouchableOpacity>
    </Screen >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261CA6',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 20,
    color: '#FFFFFF',
    textAlign: 'center'
  },
  entryButton: {
    padding: 15,
    borderRadius: 20,
    margin: 8,
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: '#ffffff'
  },
  buttonText: {
    fontSize: 20,
    color: '#261CA6'
  }
});


export default Welcome;