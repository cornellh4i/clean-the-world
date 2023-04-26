import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'
import { getApp } from 'firebase/app';
import { auth } from '../mobile/firebase/firebaseConfig.js';
import PhoneAuth from './components/PhoneAuth';
import DataEntries from './pages/data-entry';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useState } from 'react';
import Profile from './components/Profile';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const app = getApp();
  const firebaseConfig = app ? app.options : undefined;

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <PhoneAuth config={firebaseConfig} auth={auth} authenticated={authenticated} />
        {/* <DataEntries /> */}
        <Profile />
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