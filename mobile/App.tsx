import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'
import { getApp } from 'firebase/app';
import { auth } from '../mobile/firebase/firebaseConfig.js';
import PhoneAuth from './components/CustomButton/PhoneAuth';

export default function App() {
  const app = getApp();

  const firebaseConfig = app ? app.options : undefined;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PhoneAuth config={firebaseConfig} auth={auth} />
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