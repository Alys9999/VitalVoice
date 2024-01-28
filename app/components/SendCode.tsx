import React from 'react';
import { SetStateAction, Dispatch } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { PhoneAuthProvider } from 'firebase/auth';
import { SignIn } from '../Auth';
import { Feather } from '@expo/vector-icons';

interface SendCodeProps {
    verificationId: string;
    setVerificationId: Dispatch<SetStateAction<string>>;
    verificationCode: string;
    setVerificationCode: Dispatch<SetStateAction<string>>;
    auth: any; // Replace 'any' with the actual type of 'auth'
    showMessage: (message: { text: string; color?: string }) => void;
}

const SendCode: React.FC<SendCodeProps> = ({ verificationId, verificationCode, auth, showMessage }) => {
    const sendCode = async () => {
        try {
            if (typeof verificationId === "string" && typeof verificationCode === "string") {
                const credential = PhoneAuthProvider.credential(verificationId, verificationCode);
                SignIn(auth, credential);

                showMessage({ text: 'Authentication successful.' });
            }
        } catch (err: any) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
        }
    };

    return (
        <TouchableOpacity onPress={sendCode}>
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

export default SendCode;