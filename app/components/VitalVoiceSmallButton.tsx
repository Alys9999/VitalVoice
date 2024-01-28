import { Pressable, StyleSheet, View } from "react-native"
import { Text } from "react-native";


function VitalVoiceSmallButton(props: any){
    return(
        <Pressable onPress={(props.action)}  style={styles.container}>
            <Text >{props.name}</Text>
        </Pressable>
    )
}


export default VitalVoiceSmallButton;

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
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