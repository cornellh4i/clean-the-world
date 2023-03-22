import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'
import { getApp } from 'firebase/app';
import { auth } from '../mobile/firebase/firebaseConfig.js';
import PhoneAuth from './components/CustomButton/PhoneAuth';
import DataEntry from './components/CustomButton/DataEntry';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function App() {
  const app = getApp();

  const firebaseConfig = app ? app.options : undefined;

  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAwareScrollView>
        <PhoneAuth config={firebaseConfig} auth={auth} />
        <DataEntry />
      </KeyboardAwareScrollView>

    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef4e1',
    alignItems: 'center',
    justifyContent: 'center'
  }
});