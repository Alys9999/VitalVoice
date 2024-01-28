import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './Firebase';
import Login from './app/screens/AuthScreen/DoctorSignin';
import Signup from './app/screens/AuthScreen/NewUser';
import BottomTabNav from './app/navigations/BottomTabNav';

import { useFonts, Quicksand_500Medium } from '@expo-google-fonts/quicksand';
import LandingScreen from './app/screens/AuthScreen/LandingScreen';
import DoctorSignin from './app/screens/AuthScreen/DoctorSignin';
import PatientSignIn from './app/screens/AuthScreen/PatientSignin';
import NewUser from './app/screens/AuthScreen/NewUser';

const Stack = createNativeStackNavigator()

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("User state changed. Current user: ", user?.phoneNumber);
      setUser(user);
    })
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        {user ? (<Stack.Screen name="BottomTabNav" component={BottomTabNav} options={{ headerShown: false }}></Stack.Screen>) : (
        <><Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}></Stack.Screen>
                <><Stack.Screen name="DoctorSignin" component={DoctorSignin} options={{ headerShown: false }}></Stack.Screen>

        <Stack.Screen name="PatientSignin" component={PatientSignIn} options={{ headerShown: false, headerTitle:"" }}></Stack.Screen></>
        <Stack.Screen name="NewUser" component={NewUser} options={{ headerShown: false, headerTitle:"" }}></Stack.Screen></>)}

      </Stack.Navigator>
    </NavigationContainer>
  );
}
