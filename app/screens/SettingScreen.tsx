import { Text, View } from "react-native"
import { SignOut } from "../Auth";
import VitalVoiceSmallButton from "../components/VitalVoiceSmallButton";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { getLocales, locales } from 'expo-localization';
import { FIREBASE_AUTH } from "../../Firebase";
import VitalVoiceButton from "../components/VitalVoiceButton";




const SettingScreen = () => {
    const languages = getLocales();

    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={{ flex: 1, paddingTop: 40, alignItems: "center" }}>
            <Text>Current User: {FIREBASE_AUTH.currentUser?.phoneNumber}</Text>
            <Text>Please choose a language:</Text>
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
            <VitalVoiceButton name='Sign out' action={() => { SignOut() }}></VitalVoiceButton>
        </View>
    )
}

export default SettingScreen;