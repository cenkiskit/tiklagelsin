import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenNames } from "../Constants/ScreenNames";
import LoginScreen from "../Sections/Auth/Screens/LoginScreen";
import HomeScreen from "../Sections/Home/Screens/HomeScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={ScreenNames.AUTH.LOGIN_SCREEN}
                component={LoginScreen}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name={ScreenNames.HOME.HOME_SCREEN}
                component={HomeScreen}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    )
}

export default AuthStack