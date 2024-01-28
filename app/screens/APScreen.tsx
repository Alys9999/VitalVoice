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
        <View style={styles.container}>
            <Text style={styles.header}>Settings</Text>
            <ScrollView>
                {doctorOfUser.map((docItem, index1) => (
                    <View key={index1} style={styles.largeAdviceContainer} >
                        <Text style={styles.name}>{docItem.docName} advices...</Text>
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
        </View>
    )
}

export default APScreen;

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
    adviceContainer:{
        backgroundColor:'#F2F2F2',
        borderWidth: 0,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 25,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    largeAdviceContainer:{
        marginTop: 20
    },
    name: {
        marginBottom: 5,
        fontWeight: 'bold',
        marginLeft: 10,
    }

})