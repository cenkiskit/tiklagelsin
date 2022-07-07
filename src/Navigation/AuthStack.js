import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { ScreenNames } from "../Constants/ScreenNames";
import LoginScreen from "../Sections/Auth/Screens/LoginScreen";
import HomeScreen from "../Sections/Home/Screens/HomeScreen";
import InitialLoadingScreen from '../Sections/Auth/Screens/InitialLoadingScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={ScreenNames.INITIAL_LOADING_SCREEN}
                component={InitialLoadingScreen}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name={ScreenNames.AUTH.LOGIN_SCREEN}
                component={LoginScreen}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    )
}

export default AuthStack