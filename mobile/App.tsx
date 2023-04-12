import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'
import { getApp } from 'firebase/app';
import { auth } from '../mobile/firebase/firebaseConfig.js';
import PhoneAuth from './components/CustomButton/PhoneAuth';
import SubmissionPopup from './components/SubmissionPopup';
import PhoneAuth from './components/PhoneAuth';
import DataEntry from './components/DataEntry';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useState } from 'react';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const app = getApp();
  const firebaseConfig = app ? app.options : undefined;

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <PhoneAuth config={firebaseConfig} auth={auth} authenticated={authenticated} />
        <DataEntry />
      </View >
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fef4e1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#fef4e1',
    alignItems: 'center',
    justifyContent: 'center'
  }
});