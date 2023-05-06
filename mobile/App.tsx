import { StyleSheet } from 'react-native'
import { getApp } from 'firebase/app';
import { auth } from '../mobile/firebase/firebaseConfig.js';
import PhoneAuth from './components/PhoneAuth';
import { useState } from 'react';
import NavBar from "./components/Navbar";
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

  const app = getApp();
  const firebaseConfig = app ? app.options : undefined;

  return (
    <NavigationContainer>
      <NavBar isEnglish={isEnglish} setIsEnglish={setIsEnglish}/>
      <PhoneAuth
        config={firebaseConfig}
        auth={auth}
        authenticated={authenticated}
      />
      {/* <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <PhoneAuth
            config={firebaseConfig}
            auth={auth}
            authenticated={authenticated}
          />
          <NavBar />
        </View>
      </KeyboardAwareScrollView> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
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
  navBar: {
    backgroundColor: "#261CA6",
  },
  buttonText: {
    fontSize: 20,
    color: '#261CA6'
  }
});
