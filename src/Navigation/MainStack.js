import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenNames } from "../Constants/ScreenNames";
import LoginScreen from "../Sections/Auth/Screens/LoginScreen";
import HomeScreen from "../Sections/Home/Screens/HomeScreen";
import BasketScreen from '../Sections/Basket/Screens/BasketScreen';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={ScreenNames.HOME.HOME_SCREEN}
                component={HomeScreen}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name={ScreenNames.HOME.BASKET_SCREEN}
                component={BasketScreen}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    )
}

export default MainStack