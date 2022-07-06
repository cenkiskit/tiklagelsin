import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import AuthStack from './AuthStack'
import MainStack from './MainStack'
import { useSelector } from 'react-redux'
import { AuthSelectors } from '../Sections/Auth'

const RootNavigator = (props) => {

    const token = useSelector(AuthSelectors.loginData)

    const renderStack = () => {
        if (token) {
            return <MainStack />
        }
        return <AuthStack />
    }

    return (
        <NavigationContainer>
            {renderStack()}
        </NavigationContainer>
    )
}

export default RootNavigator