import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { initializeApp, getApp } from 'firebase/app';
import { getAuth, PhoneAuthProvider, signInWithCredential, ApplicationVerifier } from 'firebase/auth';
import parsePhoneNumber from 'libphonenumber-js'
import { FIREBASE_APP, FIREBASE_AUTH } from '../../../Firebase';
import { SignIn } from '../../Auth';
import RequestCode from '../../components/RequestCode';
import SendCode from '../../components/SendCode';


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
  const [verificationId, setVerificationId] = React.useState<string>("");
  const [verificationCode, setVerificationCode] = React.useState<string>("");

  const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = React.useState<any>(null);
  const attemptInvisibleVerification = true;

  const logo = require('../../../assets/VitalVoiceLogo.png');

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100}
    >
      <View style={styles.container}>
        <Image source={logo} resizeMode="contain" style={styles.logo}></Image>

        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={app.options}
        // attemptInvisibleVerification
        />
        <View style={{ width: '80%' }}>
          <Text style={{
            paddingLeft: "2%",
            fontWeight: 'bold',
            marginBottom: 5,
          }}>Phone</Text>
          <View style={styles.inputBox}>
            <TextInput style={styles.input}
              autoComplete="tel"
              keyboardType="phone-pad"
              placeholder="Request SMS Code"
              textContentType="telephoneNumber" value={phoneNumber} onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}></TextInput>
            <RequestCode phoneNumber={phoneNumber} recaptchaVerifier={recaptchaVerifier} setVerificationId={setVerificationId} showMessage={showMessage}></RequestCode>
          </View>
        </View>

        <View style={{ width: '80%' }}>
          <Text style={{
            paddingLeft: "2%",
            fontWeight: 'bold',
            marginBottom: 5,
          }}>SMS Code</Text>
          <View style={styles.inputBox}>
            <TextInput style={styles.input}
              editable={!!verificationId}
              onChangeText={setVerificationCode}
              placeholder="Verify with SMS"
            />
            <SendCode verificationId={verificationId} setVerificationId={setVerificationId} verificationCode={verificationCode} setVerificationCode={setVerificationCode} auth={auth} showMessage={showMessage}></SendCode>
          </View>
        </View>

        {message ? (
          <TouchableOpacity
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

        <View style={{ marginTop: 30, width: '90%', alignItems: 'center' }}>
          {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#DBE9EE',
  },
  t: {
    paddingLeft: "2%",
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputBox: {
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
  },
  logo: {
    marginTop: -40,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '80%',
    marginLeft: 20,
  }
})