import { View, Text, StyleSheet, TextInput, ActivityIndicator, Pressable, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SignIn } from "../../Auth";
import { NavigationProp } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import VitalVoiceButton from "../../components/VitalVoiceButton";



interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Login = ({ navigation }: RouterProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const logo = require('../../assets/VitallVoiceLogo.png');

    // Function to toggle the password visibility state 
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const signIn = async () => {
        setLoading(true);
        SignIn(email, password).catch((error) => {
            Alert.alert('Sign in failed: ' + error.message);
        }).finally(() => {
            setLoading(false);
        });
    }


    return (
        <View>
            <Image source={logo} resizeMode="contain"></Image>
            <View>
                <TextInput value={email}
                    placeholder="Email"
                    autoCapitalize="none"
                    style={{ borderColor: "#fff" }}
                    onChangeText={(text) => { setEmail(text) }}></TextInput>
            </View>
            <View>
                <TextInput secureTextEntry={!showPassword}
                    value={password} placeholder="Password"
                    autoCapitalize="none" style={{ borderColor: "#fff" }}
                    onChangeText={(text) => { setPassword(text) }}></TextInput>
                <MaterialCommunityIcons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color="#aaa"
                    onPress={toggleShowPassword}
                />
            </View>
            {loading ? (<ActivityIndicator size="large" color="@0000ff" />) : (
                <View>
                    <VitalVoiceButton actions={()=>{}} name='Doctor Sign In'></VitalVoiceButton>
                    <VitalVoiceButton actions={()=>{}} name='Patient Sign In'></VitalVoiceButton>
                </View>


            )}

        </View>

    );
};

export default Login;

