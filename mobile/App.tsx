import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { getApp } from 'firebase/app';
import { auth } from '../mobile/firebase/firebaseConfig.js';
import PhoneAuth from './components/PhoneAuth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useState } from 'react';
import Welcome from './pages/welcome';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const app = getApp();
  const firebaseConfig = app ? app.options : undefined;

  // stop keyboard from showing up on start up
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
      {loggedIn ? (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Welcome />
        </View >
      ) : (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.headerText}> Clean the World</Text>
          <TouchableOpacity style={[styles.authButton, { backgroundColor: '#ffffff' }]}
            onPress={async () => {
              setLoggedIn(true)
            }}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.authButton, { backgroundColor: '#C4BFFF' }]}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <PhoneAuth config={firebaseConfig} auth={auth} authenticated={authenticated} />
        </View >
      )}
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#261CA6',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#261CA6',
    justifyContent: 'center'
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 20,
    color: '#FFFFFF'
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
});