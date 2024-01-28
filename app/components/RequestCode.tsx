import React from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { PhoneAuthProvider } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../Firebase';

const auth = FIREBASE_AUTH;

interface RequestCodeProps {
    phoneNumber: string;
    recaptchaVerifier: React.RefObject<any>;
    setVerificationId: React.Dispatch<React.SetStateAction<string>>;
    showMessage: (message: { text: string; color?: string }) => void;
    style?: StyleProp<ViewStyle>;
}

const RequestCode: React.FC<RequestCodeProps> = ({ phoneNumber, recaptchaVerifier, setVerificationId, showMessage }) => {
    const requestCode = async () => {
        try {
            const phoneProvider = new PhoneAuthProvider(auth);
            if (typeof phoneNumber == "string") {
                const verificationId = await phoneProvider.verifyPhoneNumber(
                    phoneNumber,
                    recaptchaVerifier.current
                );
                setVerificationId(verificationId);
                showMessage({
                    text: 'Verification code sent.',
                });
            }

        } catch (err: any) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
        }
    };

    return (
        <TouchableOpacity onPress={requestCode}>
            <Feather style={styles.send} name="send" size={24} color="#4A6FA5" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    send: {
        marginRight: 15,
        marginBottom: 7,
    },
});

export default RequestCode;