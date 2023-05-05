import { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { FirebaseOptions } from 'firebase/app';

/** Component for phone authentication flow to be used to log into the app
 *  @param config is the firebaseConfig
 *  @param auth is the Auth instance associated with the provided Firebase App
*/
const PhoneAuth = (props: { config: FirebaseOptions | undefined, auth: any, authenticated: boolean, }) => {
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

  return (
    <View style={props.authenticated ? styles.container : styles.hidden} >
      <>
        {<FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={props.config}
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
                  style={styles.fieldBox}
                  placeholder="+1 999 999 9999"
                  autoComplete="tel"
                  keyboardType="phone-pad"
                  textContentType="telephoneNumber"
                  onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                />
                <TouchableOpacity style={styles.smallButton}
                  onPress={async () => {
                    setLoading(true);
                    try {
                      const phoneProvider = new PhoneAuthProvider(props.auth);
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
                  style={styles.fieldBox}
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
                      const userCredential = await signInWithCredential(props.auth, authCredential);
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
};

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
    backgroundColor: '#9fd4a3'
  },
  buttonText: {
    fontSize: 15,
    color: '#ffffff'
  },
  promptText: {
    fontSize: 15
  },
  titleText: {
    padding: 10,
    fontSize: 15
  },
  fieldBox: {
    marginVertical: 10,
    fontSize: 17,
    padding: 8,
    backgroundColor: "#ffffffff"
  },
  hidden: {
    display: 'none'
  }
});

export default PhoneAuth;