import { View, Text, StyleSheet, TextInput, ActivityIndicator, Pressable, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SignIn } from "../../Auth";
import { NavigationProp} from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';



interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Login = ({ navigation }: RouterProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    // const logo = require('../../../assets/chroniLogo.png');

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
            {/* <Image source={logo} resizeMode="contain"></Image> */}
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
                    <Pressable onPress={() => navigation.navigate('Signup')} >
                        <Text>Sign Up</Text>
                    </Pressable>
                </View>


            )}

        </View>

    );
};

export default Login;

