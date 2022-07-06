import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import AuthStack from './AuthStack'
import MainStack from './MainStack'

const RootNavigator = (props) => {

    return (
        <NavigationContainer>
            {
                true ?
                    <AuthStack /> : <MainStack />
            }
        </NavigationContainer>
    )
}

export default RootNavigator