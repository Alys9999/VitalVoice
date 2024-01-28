import { Text, View, StyleSheet, Pressable, TextInput } from "react-native"
import { SignOut } from "../Auth";
import VitalVoiceSmallButton from "../components/VitalVoiceSmallButton";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { getLocales, locales } from 'expo-localization';
import { FIREBASE_AUTH } from "../../Firebase";
import VitalVoiceButton from "../components/VitalVoiceButton";
import SearchDropDown from "../components/SearchDropDown";


const SettingScreen = () => {
    // const languages = getLocales();

    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
    const languages = ['English', 'Español', 'Français', 'Deutsch', '中文', 'Português', 'العربية', 'Русский', '日本語', 'हिन्दी', 'Vietnamese'];

    const [filtered, setFiltered] = useState<string[]>(languages);
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searching, setSearching] = useState<boolean>(false);

    const onSearch = (text: string) => {
        setSearchQuery(text);
        setSearching(!!text);

        const temp = text.toLowerCase();
        const filteredLanguages = languages.filter((item) =>
            item.toLowerCase().includes(temp)
        );

        setFiltered(filteredLanguages);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>

            <TextInput
                style={styles.searchInput}
                placeholder="Search"
                value={searchQuery}
                onChangeText={onSearch}
            />

            {searching && (
                <SearchDropDown
                    onPress={() => setSearching(false)}
                    dataSource={filtered}
                />
            )}

            <Pressable onPress={SignOut} style={styles.signOut}>
                <Text style={styles.text}>Sign out</Text>
            </Pressable>
        </View>
    );
};

//         {/* <Text>Current User: {FIREBASE_AUTH.currentUser?.phoneNumber}</Text> */ }

// {/* <Picker
//             selectedValue={selectedLanguage}
//             style={{ height: 50, width: 150 }}
//             onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
//             <Picker.Item label='English' value='en'></Picker.Item>
//             <Picker.Item label='Mandarin (Chinese)' value='cn'></Picker.Item>
//             <Picker.Item label='Vietnamese' value='ve'></Picker.Item>
//             <Picker.Item label='French' value='fr'></Picker.Item>
//             <Picker.Item label='German' value='gr'></Picker.Item>
//             <Picker.Item label='Italian' value='it'></Picker.Item>
//             <Picker.Item label='Russian' value='ru'></Picker.Item>
//             <Picker.Item label='Japanese' value='ja'></Picker.Item>
//             <Picker.Item label='Portuguese' value='pu'></Picker.Item>
//             <Picker.Item label='Arabic' value='ar'></Picker.Item>

//         </Picker> */}


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
    signOut: {
        width: '80%',
        height: 40,
        borderRadius: 20,
        backgroundColor: '#4A6FA5',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
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
    searchInput: {
        backgroundColor: '#000',
    },
});

export default SettingScreen;