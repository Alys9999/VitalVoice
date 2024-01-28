// 

import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { initializeApp, getApp } from 'firebase/app';
import { getAuth, PhoneAuthProvider, signInWithCredential, ApplicationVerifier } from 'firebase/auth';
import parsePhoneNumber from 'libphonenumber-js'
import { FIREBASE_APP, FIREBASE_AUTH } from '../../../Firebase';
import { SignIn } from '../../Auth';


// Initialize Firebase JS SDK >=9.x.x
// https://firebase.google.com/docs/web/setup
/*try {
  initializeApp({
    ...
  });
} catch (err) {
  // ignore app already initialized error in snack
}*/

// Firebase references
const app = FIREBASE_APP;
const auth = FIREBASE_AUTH;

// Double-check that we can run the example
if (!app?.options || Platform.OS === 'web') {
  throw new Error(
    'This example only works on Android or iOS, and requires a valid Firebase config.'
  );
}

export default function DoctorSignin() {
  // Ref or state management hooks
  let recaptchaVerifier = React.useRef<any>();
  let [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [verificationId, setVerificationId] = React.useState<string>();
  const [verificationCode, setVerificationCode] = React.useState<string>();

  const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = React.useState<any>(null);
  const attemptInvisibleVerification = true;

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
        // attemptInvisibleVerification
      />
        <View style={{ width: '80%'}}>
            <Text style={{paddingLeft: "2%",
        fontWeight: 'bold',
        marginBottom: 5,}}>Phone Number</Text>
            <View style={styles.inputBox}>
                <TextInput style={styles.inputV}         autoFocus
        autoComplete="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber" value={phoneNumber} onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}></TextInput>
            </View>
        </View>

      <Button
        title="Send Verification Code"
        disabled={!phoneNumber}
        onPress={async () => {
          // The FirebaseRecaptchaVerifierModal ref implements the
          // FirebaseAuthApplicationVerifier interface and can be
          // passed directly to `verifyPhoneNumber`.
          try {
            const phoneProvider = new PhoneAuthProvider(auth);
            if (typeof phoneNumber == "string") {
                const verificationId = await phoneProvider.verifyPhoneNumber(
                  phoneNumber,
                    recaptchaVerifier.current
                  );
                  setVerificationId(verificationId);
                  showMessage({
                    text: 'Verification code has been sent to your phone.',
                  });
            }
            
          } catch (err:any) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
          }
        }}
      />
      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
      <TextInput
        style={{ marginVertical: 10, fontSize: 17 }}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={setVerificationCode}
      />
      <Button
        title="Confirm Verification Code"
        disabled={!verificationId}
        onPress={async () => {
          try {
            if (typeof verificationId == "string" && typeof verificationCode == "string") {
            const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
            SignIn(auth, credential);

            showMessage({ text: 'Phone authentication successful 👍' });
            }
          } catch (err:any) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
          }
        }}
      />
      {message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: "#ffffffee", justifyContent: 'center' },
          ]}
          onPress={() => showMessage(undefined)}>
          <Text
            style={{
              color: message.color || 'blue',
              fontSize: 17,
              textAlign: 'center',
              margin: 20,
            }}>
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        backgroundColor: '#DBE9EE',
    },
    t: {
        paddingLeft: "2%",
        fontWeight: 'bold',
        marginBottom: 5,
    },
    inputV: {
        maxWidth: '80%'
    },
    inputBox: {
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})