import { Text, View } from "react-native"
import { SignOut, currentUser } from "../Auth";
import VitalVoiceSmallButton from "../components/VitalVoiceSmallButton";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { getLocales } from 'expo-localization';




const SettingScreen = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const languages = getLocales();

    return (
        <View>
            <Text>Current User: {currentUser?.displayName}</Text>
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                {languages.map((lang, index) => {
                    return <Picker.Item key={index} value={lang} />;
                })}


            </Picker>
            <VitalVoiceSmallButton name='Sign out' action={SignOut()}></VitalVoiceSmallButton>
        </View>
    )
}

export default SettingScreen;