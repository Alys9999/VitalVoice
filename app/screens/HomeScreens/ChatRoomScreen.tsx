import { Image, Pressable, StyleSheet, View } from "react-native"

interface mockingChat {
    sender: 'string',

}



const ChatRoomScreen = ()=>{
    const mic = require('../../../assets/mic.png');
    return(
        <View style={styles.container}>
            <View style={styles.audioButton}>
            <Pressable >
            <Image style={styles.audioButton} source={mic}  resizeMode="contain" ></Image>
            </Pressable>
            </View>

            
        </View>
    )
}

export default ChatRoomScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        backgroundColor: '#DBE9EE',
    },
    audioButton:{
        width: 100, // Width of the round view
    height: 100, // Height of the round view (should be equal to width)
    borderRadius: 50, // Half of the width and height to make it round
    backgroundColor: '#fff',
    },
    audioImage:{
        width:100,
        height:100
    }

})