import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreens/HomeScreen";
import APScreen from "../screens/APScreen";
import SettingScreen from "../screens/SettingScreen";
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import HomeNav from "./HomeNav";



const bottomTab = createBottomTabNavigator();

const BottomTabNav: React.FC = () => {
	return (
		<bottomTab.Navigator 
		initialRouteName="Home"
		screenOptions={({route}) => ({
			tabBarIcon: ({color, size}) => {
				let iconComponent;

				if (route.name === "Home") {
					iconComponent = <FontAwesome name="home" size={size} color={color} />;
				} else if (route.name === "Action Plan") {
					iconComponent = <FontAwesome5 name="clipboard-list" size={size} color={color} />;
				} else if (route.name === "Settings") {
					iconComponent = <Ionicons name="settings-sharp" size={size} color={color} />;
				}

				return iconComponent;
			},
		})}>
			<bottomTab.Screen
				name="Home"
				component={HomeNav}
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
