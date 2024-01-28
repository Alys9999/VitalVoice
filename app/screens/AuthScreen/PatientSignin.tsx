import { View, Text, StyleSheet, TextInput, ActivityIndicator, Pressable, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SignIn } from "../../Auth";
import { NavigationProp } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import VitalVoiceButton from "../../components/VitalVoiceButton";
import VitalVoiceTextInput from '../../components/VitalVoiceTextInput';
import VitalVoiceSmallButton from "../../components/VitalVoiceSmallButton";


interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const DoctorSignIn = ({ navigation }: RouterProps) => {
    const [phone, setPhone] = useState('');
    const [SMScode, setSMScode] =useState('');
    const [loading, setLoading] = useState(false);
    const logo = require('../../../assets/VitalVoiceLogo.png');

    // Function to toggle the password visibility state 

    const signIn = async () => {
        setLoading(true);
        setLoading(false);

    }


    return (
        <View style={[styles.viewstyle]}>
            <Image source={logo} resizeMode="contain" style={styles.logo}></Image>
            <VitalVoiceTextInput name='Phone' value={phone} onChangeText={setPhone}></VitalVoiceTextInput>
            <VitalVoiceTextInput name='SMS Code' value={SMScode} onChangeText={setSMScode}></VitalVoiceTextInput>
            <VitalVoiceSmallButton name="Sign In" action={()=>{}}></VitalVoiceSmallButton>
        </View>

    );
};

export default DoctorSignIn;

const styles = StyleSheet.create({
    viewstyle:{
        flex:1,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        backgroundColor: '#DBE9EE',
    },
    logo: {
        marginTop: -110,

    },
})