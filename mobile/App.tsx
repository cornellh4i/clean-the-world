import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'
import { getApp } from 'firebase/app';
import { auth } from '../mobile/firebase/firebaseConfig.js';
import PhoneAuth from './components/PhoneAuth';
import { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { router } from './router';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const app = getApp();
  const firebaseConfig = app ? app.options : undefined;

  return (
    <SafeAreaProvider>
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
        <StatusBar style="auto" />
        <NavigationContainer>{router()}</NavigationContainer>
        <PhoneAuth config={firebaseConfig} auth={auth} authenticated={authenticated} />
      </KeyboardAwareScrollView>
    </SafeAreaProvider>
  );
};

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
  buttonText: {
    fontSize: 20,
    color: '#261CA6'
  }
});