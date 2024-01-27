import { View } from "react-native";
import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';


const Signup = ()=>{
    const [text, onChangeText] = React.useState('Name');
    const [number, onChangeNumber] = React.useState('');
    return(
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Phone"
                keyboardType="numeric"
            />
        </SafeAreaView> 
    );
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Signup;