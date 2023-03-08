import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { firebaseConfig, auth } from "../mobile/firebase/firebaseConfig.js"
// import OtpInput from "otp-input-react";
// import PhoneInput from "react-phone-input-2";
import { FirebaseRecaptchaVerifier, FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
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

  // function generateRecaptcha() {
  //   if (!window.recaptchaVerifier) {
  //     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  //       'size': 'invisible',
  //       'callback': () => {
  //         // reCAPTCHA solved, allow signInWithPhoneNumber.
  //         onSignIn();
  //       },
  //       "expired-callback": () => { },
  //     }, auth);
  //   }
  // }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <>
        {/* <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification={attemptInvisibleVerification}
          appVerificationDisabledForTesting={appVerificationDisabledForTesting}
        /> */}
        {/* <div id="recaptcha-container"></div> */}
        {verificationId && (<FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification={attemptInvisibleVerification}
          appVerificationDisabledForTesting={appVerificationDisabledForTesting}
        />
        )}
        {user ? (
          <Text>Login Successful</Text>
        ) : (
          <View style={styles.container}>
            <Text>Welcome to Clean the World!</Text>
            {!showOTP ? (
              <>
                <Text style={{ marginTop: 20 }}>Verify your phone number</Text>
                <TextInput
                  style={{ marginVertical: 10, fontSize: 17 }}
                  placeholder="+1 999 999 9999"
                  autoFocus
                  autoComplete="tel"
                  keyboardType="phone-pad"
                  textContentType="telephoneNumber"
                  onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                />
                <Button
                  onPress={async () => {
                    setLoading(true);
                    try {
                      const phoneProvider = new PhoneAuthProvider(auth);
                      const verificationId = await phoneProvider.verifyPhoneNumber(
                        // "+11234567890",
                        phoneNumber,
                        recaptchaVerifier.current
                      );
                      setVerificationId(verificationId);
                      setLoading(false);
                      setShowOTP(true);
                      // alert('Verification code has been sent to your phone.');
                    }
                    catch (err) {
                      // if (err == TypeError)
                      setLoading(false);
                      alert(err);
                    }
                  }}
                  title="Send code via SMS"
                  color="#9FD4A3"
                // {loading}
                />
              </>
            ) : (
              <>
                <Text style={{ marginTop: 20 }}>Enter your OTP</Text>
                <TextInput
                  style={{ marginVertical: 10, fontSize: 17 }}
                  placeholder="123456"
                  onChangeText={otp => setOtp(otp)}
                />
                <Button
                  onPress={async () => {
                    try {
                      setLoading(true);
                      const authCredential = PhoneAuthProvider.credential(verificationId, otp);
                      const userCredential = await signInWithCredential(auth, authCredential);
                      setUser(userCredential);
                      setLoading(false);
                      // alert('Phone authentication successful')
                    } catch (err) {
                      setLoading(false);
                      alert(err);
                    }
                  }
                  }
                  title="Verify OTP"
                  color='#9FD4A3'
                // {loading}
                />
              </>
            )}
          </View>
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF4E1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  verifyButton: {
    flex: 1,
    borderRadius: 8,
    padding: 10,
    margin: 10,
    backgroundColor: '#9FD4A3',
    alignItems: 'center',
    justifyContent: 'center'
  },
});