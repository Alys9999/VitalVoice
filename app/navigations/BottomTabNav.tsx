import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../screens/HomeScreens/HomeScreen";
import APScreen from "../screens/APScreen";
import SettingScreen from "../screens/SettingScreen";
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import HomeNav from "./HomeNav";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const bottomTab = createBottomTabNavigator();

const BottomTabNav: React.FC = () => {
	const getTabBarVisibility = (route: any) => {
		const routeName = getFocusedRouteNameFromRoute(route);
		if (routeName === 'ChatScreen') {
			return false;
		}
		return true;
	};

	return (
		<bottomTab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size, focused }) => {
					let iconComponent;

					if (route.name === "Home") {
						iconComponent = <FontAwesome name="home" size={size} color={focused ? '#4A6FA5' : color} style={styles.icon} />;
					} else if (route.name === "Action Plan") {
						iconComponent = <FontAwesome5 name="clipboard-list" size={size} color={focused ? '#4A6FA5' : color} style={styles.icon} />;
					} else if (route.name === "Settings") {
						iconComponent = <Ionicons name="settings-sharp" size={size} color={focused ? '#4A6FA5' : color} style={styles.icon} />;
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

const styles = StyleSheet.create({
	icon: {
		marginTop: 7,
	},
});

export default BottomTabNav;
