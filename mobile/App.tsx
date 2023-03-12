import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { getApp } from 'firebase/app';
import { auth } from "../mobile/firebase/firebaseConfig.js"

export default function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId]: any = useState();
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser]: any = useState();
  const recaptchaVerifier: any = useRef(null);
  const attemptInvisibleVerification = false;
  const appVerificationDisabledForTesting = false;
  const textInput: any = useRef(null);

  const app = getApp();


  const firebaseConfig = app ? app.options : undefined;

  // TO DO
  // make phone authentication a separate component
  // timer for otp verification? resend otp?

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <>
        {<FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification={attemptInvisibleVerification}
          appVerificationDisabledForTesting={appVerificationDisabledForTesting}
        />
        }
        {user ? (
          <Text style={styles.promptText}>Login Successful!</Text>
        ) : (
          <View style={styles.container}>
            <Text style={styles.titleText}>Welcome to Clean the World!</Text>
            {!showOTP ? (
              <>
                <Text style={styles.promptText}>Verify your phone number</Text>
                <TextInput
                  style={{ marginVertical: 10, fontSize: 17 }}
                  placeholder="+1 999 999 9999"
                  autoFocus
                  autoComplete="tel"
                  keyboardType="phone-pad"
                  textContentType="telephoneNumber"
                  onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                />
                <TouchableOpacity style={styles.smallButton}
                  onPress={async () => {
                    setLoading(true);
                    try {
                      const phoneProvider = new PhoneAuthProvider(auth);
                      const newVerificationId = await phoneProvider.verifyPhoneNumber(
                        phoneNumber,
                        recaptchaVerifier.current
                      );
                      setVerificationId(newVerificationId);
                      setLoading(false);
                      setShowOTP(true);
                      textInput.current.clear();
                    }
                    catch (err) {
                      setLoading(false);
                      setShowOTP(false);
                      if (err == "Error: Cancelled by user")
                        alert("ReCAPTCHA verification failed")
                      else alert("Phone number is incorrect or not verified");
                    }
                  }}>
                  <Text style={styles.buttonText}>Send code via SMS</Text>
                  {/* {loading} */}
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.promptText}>Enter your OTP</Text>
                <TextInput
                  style={{ marginVertical: 10, fontSize: 17 }}
                  placeholder="123456"
                  autoFocus
                  autoComplete="sms-otp"
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  onChangeText={otp => setOtp(otp)}
                  ref={input => { textInput.current = input }}
                />
                <TouchableOpacity style={styles.smallButton}
                  onPress={async () => {
                    try {
                      setLoading(true);
                      const authCredential = PhoneAuthProvider.credential(verificationId, otp);
                      const userCredential = await signInWithCredential(auth, authCredential);
                      setUser(userCredential);
                      setLoading(false);
                    } catch (err) {
                      setLoading(false);
                      alert("Code is incorrect");
                    }
                  }}>
                  <Text style={styles.buttonText}>Verify OTP</Text>
                  {/* {loading} */}
                </TouchableOpacity>
              </>
            )}
          </View>
        )}
      </>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fef4e1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  smallButton: {
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: '#9fd4a3',
    borderColor: '#f0f0f0'
  },
  buttonText: {
    fontFamily: 'Verdana',
    fontSize: 15,
    color: '#ffffff'
  },
  promptText: {
    fontFamily: 'Verdana',
    fontSize: 15
  },
  titleText: {
    padding: 10,
    fontFamily: 'Verdana',
    fontSize: 15
  },
});