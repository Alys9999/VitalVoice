import { Text, View, Pressable, StyleSheet } from "react-native"
import { SignOut } from "../Auth";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { getLocales, locales } from 'expo-localization';

const SettingScreen = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={styles.container}>
            {/* <Text>Current User: {FIREBASE_AUTH.currentUser?.phoneNumber}</Text> */}
            <Text style={styles.header}>Settings</Text>
            <Text style={styles.subheading}>Please choose a language:</Text>
            <Picker
                selectedValue={selectedLanguage}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
                <Picker.Item label='English' value='en'></Picker.Item>
                <Picker.Item label='Mandarin (Chinese)' value='cn'></Picker.Item>
                <Picker.Item label='Vietnamese' value='ve'></Picker.Item>
                <Picker.Item label='French' value='fr'></Picker.Item>
                <Picker.Item label='German' value='gr'></Picker.Item>
                <Picker.Item label='Italian' value='it'></Picker.Item>
                <Picker.Item label='Russian' value='ru'></Picker.Item>
                <Picker.Item label='Japanese' value='ja'></Picker.Item>
                <Picker.Item label='Portuguese' value='pu'></Picker.Item>
                <Picker.Item label='Arabic' value='ar'></Picker.Item>

            </Picker>
            <Pressable onPress={SignOut} style={styles.signOut}>
                <Text style={styles.text}>Sign out</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        backgroundColor: '#DBE9EE',
    },
    header: {
        marginTop: 60,
        fontSize: 20,
        fontWeight: 'bold',
    },
    subheading: {
        marginTop: 50,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    signOut: {
        width: '80%',
        height: 40,
        borderRadius: 20,
        backgroundColor: '#4A6FA5',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 530,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        color: "#F2F2F2",
    },
})

export default SettingScreen;