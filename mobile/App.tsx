import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'
import { getApp } from 'firebase/app';
import { auth } from '../mobile/firebase/firebaseConfig.js';
import PhoneAuth from './components/PhoneAuth';
import DataEntry from './components/DataEntry';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useState } from 'react';
// import CardList from './components/CardList';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const app = getApp();
  const firebaseConfig = app ? app.options : undefined;

  // const data = [
  //   {
  //     date: 'March 10, 2023',
  //     liters: '56',
  //     submitDate: '03/15/23',
  //     submitTime: '11:48pm'
  //   },
  //   {
  //     date: 'March 16, 2023',
  //     liters: '24.2',
  //     submitDate: '03/18/23',
  //     submitTime: '3:43pm'
  //   },
  //   {
  //     date: 'March 18, 2023',
  //     liters: '9.2',
  //     submitDate: '03/24/23',
  //     submitTime: '10:24am'
  //   },
  // ]

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <PhoneAuth config={firebaseConfig} auth={auth} authenticated={authenticated} />
        <DataEntry />
        {/* <CardList data={data}></CardList> */}
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