import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { getApp } from "firebase/app";
import { auth } from "../mobile/firebase/firebaseConfig.js";
import PhoneAuth from "./components/PhoneAuth";
import DataEntries from "./pages/data-entry";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const app = getApp();
  const firebaseConfig = app ? app.options : undefined;

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <PhoneAuth
          config={firebaseConfig}
          auth={auth}
          authenticated={authenticated}
        />
        <DataEntries />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#261CA6",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#261CA6",
    alignItems: "center",
    justifyContent: "center",
  },
});
