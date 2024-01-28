import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreens/HomeScreen";
import ChatRoomScreen from "../screens/HomeScreens/ChatRoomScreen";



const HomeStack = createNativeStackNavigator()


export default function HomeNav() {
    return (
            <HomeStack.Navigator initialRouteName='HomeScreen'>
                <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }}></HomeStack.Screen>
                <HomeStack.Screen name='theChatRoom' component={ChatRoomScreen}></HomeStack.Screen>

            </HomeStack.Navigator>

    );
}