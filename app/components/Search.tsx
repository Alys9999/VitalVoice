import { StyleSheet, TextInput, View } from "react-native"
import { Text } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

type SearchProps = {
    name: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
};

function Search({ name, value, onChangeText }: SearchProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.t}>{name}</Text>
            <View style={styles.inputBox}>
                <FontAwesome5 style={styles.searchIcon} name="search" size={20} color="#4A6FA5" />
                <TextInput style={styles.inputV} value={value} onChangeText={onChangeText}></TextInput>
            </View>
        </View>
    )
}

export default Search;


const styles = StyleSheet.create({
    t: {
        paddingLeft: "2%",
        fontWeight: 'bold',
        marginBottom: 5,
    },
    container: {
        width: '80%',
    },
    inputV: {
        maxWidth: '80%'
    },
    inputBox: {
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    searchIcon: {
        marginLeft: 15,
        marginTop: 17,
    }
})