import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Pressable, View, KeyboardAvoidingView } from 'react-native';
import VitalVoiceButton from '../../components/VitalVoiceButton';
import VitalVoiceSmallButton from '../../components/VitalVoiceSmallButton';
import VitalVoiceTextInput from '../../components/VitalVoiceTextInput';


const NewUser = ({ navigation }: any) => {
    const [firstname, onChangeFirstName] = React.useState('');
    const [lastname, onChangeLastName] = React.useState('');
    const [phone, onChangeNumber] = React.useState('');
    const [language, onChangeLanguage] = React.useState('');
    const [provider, onChangeProvider] = React.useState('');
    const [insuranceNum, onChangeInsuranceNum] = React.useState('');

    return (
        <KeyboardAvoidingView style={styles.container}>
            <VitalVoiceTextInput name='Phone' value={firstname} onChangeText={onChangeFirstName}></VitalVoiceTextInput>
            <VitalVoiceTextInput name='Last Name*' value={lastname} onChangeText={onChangeLastName}></VitalVoiceTextInput>
            <VitalVoiceTextInput name='Phone*' value={phone} onChangeText={onChangeNumber}></VitalVoiceTextInput>
            <VitalVoiceTextInput name='Language*' value={language} onChangeText={onChangeLanguage} ></VitalVoiceTextInput>
            <VitalVoiceTextInput name='Insurance Provider' value={provider} onChangeText={onChangeProvider}></VitalVoiceTextInput>
            <VitalVoiceTextInput name='Insurance #' value={insuranceNum} onChangeText={onChangeInsuranceNum}></VitalVoiceTextInput>
            <VitalVoiceSmallButton name="Sign Up" action={() => { }}></VitalVoiceSmallButton>
        </KeyboardAvoidingView>
    );
};


export default NewUser;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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