import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Checkbox from 'expo-checkbox';



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
    const [isChecked, setIsChecked] = useState(false);
    const [no, setNo] =useState(false);

    return(
<ScrollView style={styles.container}>
    {doctorOfUser.map((docItem, index1) => (
        <View key={index1} style={styles.largeAdviceContainer} >
            <Text>{index1+1}. {docItem.docName} advices: </Text>
            <View style={styles.adviceContainer}>
            {docItem.thisDocToDoItems.map((todoItem, index2) => (
                ((index2 == 0 && index1 == 0)? (<View key={index2} style={{flexDirection:'row'}}>
                <Checkbox  style={{margin:8}} value={isChecked} onValueChange={setIsChecked}/>
                <Text style={{marginTop:8}}>{todoItem}</Text>

            </View>):(                    <View key={index2} style={{flexDirection:'row'}}>
                    <Checkbox  style={{margin:8}} value={no} onValueChange={setNo}/>
                    <Text style={{marginTop:8}}>{todoItem}</Text>
 
                </View>))

                

            ))}
            </View>
        </View>
    ))}
</ScrollView>
    )
}

export default APScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        width: '100%',
        height:'100%',
        backgroundColor: '#DBE9EE',
        paddingHorizontal:"5%",
        paddingVertical:50
    },
    adviceContainer:{
        backgroundColor:'#F2F2F2',
        borderWidth:0,
        borderRadius:20,
        paddingHorizontal:10,
        paddingVertical:5
    },
    largeAdviceContainer:{
        marginTop: 20
    }

})