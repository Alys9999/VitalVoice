import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/AuthScreen/HomeScreens/HomeScreen";
import APScreen from "../screens/AuthScreen/APScreen";
import SettingScreen from "../screens/AuthScreen/SettingScreen";

const bottomTab = createBottomTabNavigator();

function BottomTabNav() {
	return (
		<bottomTab.Navigator initialRouteName="dashboard">
			<bottomTab.Screen
				name="Home"
				component={HomeScreen}
				options={{ headerShown: false }}
			></bottomTab.Screen>
			<bottomTab.Screen
				name="Action Plan"
				component={APScreen}
				options={{ headerShown: false }}
			></bottomTab.Screen>
			<bottomTab.Screen
				name="Settings"
				component={SettingScreen}
				options={{ headerShown: false }}
			></bottomTab.Screen>
		</bottomTab.Navigator>
	);
}

export default BottomTabNav;
