import { StyleSheet, Text, View } from "react-native"


interface DocItem{
    docName: string;
    thisDocToDoItems: string[]
}

const doctorOfUser: DocItem[] = [
    {docName : 'Dr. Panageas', thisDocToDoItems: [
        "Welcome to our application!",
        "The quick brown fox jumps over the lazy dog.",
        "Hello, World!",
        "React Native is a great framework for mobile development.",
        "Have a nice day!",]
        ,},
    {docName : 'Dr. Boo', thisDocToDoItems: ["This is a sample string for testing.",
    "Explore, Learn, and Grow.",
    "Keep calm and carry on.",
    "Never stop believing in yourself.",
    "Life is a journey, not a destination."
  ],} 
]


const APScreen = ()=>{
    return(
<View style={styles.container}>
    {doctorOfUser.map((docItem, index) => (
        <View key={index}>
            <Text>{index+1}. {docItem.docName} advices: </Text>
            {docItem.thisDocToDoItems.map((todoItem) => (
                <View>
                    <Text>{todoItem}</Text>
                </View>
            ))}
        </View>
    ))}
</View>
    )
}

export default APScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height:'100%',
        backgroundColor: '#DBE9EE',
    },
    audioButton: {
        position:'absolute',
        bottom:20,
        width: 100, // Width of the round view
        height: 100, // Height of the round view (should be equal to width)
        borderRadius: 50, // Half of the width and height to make it round
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    audioImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    messageBox: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F2F2F22',
        // React Native doesn't support box-shadow directly, but you can use elevation for Android
        elevation: 5, // This is for Android; you'll need to use shadow props for iOS
        // For iOS shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 16.8,
        borderRadius: 20,
        maxWidth: "60%",
        maxHeight:100
    },
    playS: {
        maxHeight: 50,
        resizeMode: 'contain'
    },
    playW: {
        maxHeight: 30,
        resizeMode: 'contain'
    }

})