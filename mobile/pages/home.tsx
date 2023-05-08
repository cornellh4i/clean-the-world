import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { ModalScreenList } from '../router';
import { Screen } from '../components/Screen';

/** Component for Data Entry flow */
interface Props {
  navigation: StackNavigationProp<ModalScreenList>;
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
  isEnglish: boolean;
}

const Home = ({ navigation, isEnglish, setIsEnglish }: Props) => {
  const onPressLoginPage = () => navigation.navigate('Welcome');

  return (
    <Screen isEnglish={isEnglish} setIsEnglish={setIsEnglish}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.headerText}> Clean the World</Text>
        <TouchableOpacity style={[styles.authButton, { backgroundColor: '#ffffff' }]}
          onPress={onPressLoginPage}>
          <Text style={styles.buttonText}>{isEnglish ? "Login" : "Iniciar Sesión"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.authButton, { backgroundColor: '#C4BFFF' }]}>
          <Text style={styles.buttonText}>{isEnglish ? "Sign Up" : "Regístrate"}</Text>
        </TouchableOpacity>
      </View>
    </Screen >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261CA6',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 20,
    color: '#261CA6'
  },
  authButton: {
    padding: 15,
    borderRadius: 20,
    margin: 8,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    padding: 20,
    color: '#FFFFFF',
    textAlign: 'center'
  }
});

export default Home;