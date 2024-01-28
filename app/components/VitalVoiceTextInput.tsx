import { StyleSheet, TextInput, View } from "react-native"
import { Text } from "react-native";

type VitalVoiceTextInputProps = {
    name: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
};

function VitalVoiceTextInput({ name, value, onChangeText }: VitalVoiceTextInputProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.t}>{name}</Text>
            <View style={styles.inputBox}>
                <TextInput style={styles.inputV} value={value} onChangeText={onChangeText}></TextInput>
            </View>
        </View>
    )
}

export default VitalVoiceTextInput;


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
        width: '90%',
        height: '100%',
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