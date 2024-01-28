import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import VitalVoiceButton from '../../components/VitalVoiceButton';
import { NavigationProp } from '@react-navigation/native';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}


const LandingScreen = ({navigation}: RouterProps)=>{
    const logo = require('../../../assets/VitalVoiceLogo.png');

    return (
        <View style={styles.viewstyle}> 
            <Image source={logo} resizeMode="contain" style={styles.logo}></Image>
            <VitalVoiceButton name='Practitioner Sign In' action={()=>{navigation.navigate('DoctorSignin')}}></VitalVoiceButton>
            <VitalVoiceButton name='Patient Sign In' action={()=>{navigation.navigate('PatientSignin')}}></VitalVoiceButton>
            <Pressable onPress={()=>{navigation.navigate("NewUser")}}>
            <Text style={styles.smallText}>New User</Text>
            </Pressable>
        </View>
    )
}

export default LandingScreen;


const styles = StyleSheet.create({
    viewstyle:{
        flex:1,
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        backgroundColor: '#DBE9EE',
    },
    logo: {
        maxHeight:400,
        maxWidth:400,
        marginTop: -40,
        marginBottom: 20,
    },
    smallText: {
        marginTop: 15,
        fontSize: 14,
        textDecorationLine: 'underline'
    },
    newSignInButton: {
        backgroundColor: '#4A6FA5',
    },
})