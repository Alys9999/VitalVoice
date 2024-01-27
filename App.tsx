import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './Firebase';
import Login from './app/screens/AuthScreen/LoginScreen';
import Signup from './app/screens/AuthScreen/SignupScreen';
import BottomTabNav from './app/navigations/BottomTabNav';

import { useFonts, Quicksand_500Medium } from '@expo-google-fonts/quicksand';

const Stack = createNativeStackNavigator()

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [fontsLoaded] = useFonts({
    Quicksand_500Medium,
  });

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("User state changed. Current user: ", user?.email);
      setUser(user);
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (<Stack.Screen name="Dashboard" component={BottomTabNav} options={{ headerShown: false }}></Stack.Screen>) : (
        <><Stack.Screen name="Login" component={Login} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Signup" component={Signup} options={{ headerShown: true, headerTitle:"" }}></Stack.Screen></>)}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
