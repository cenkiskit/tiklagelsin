import { View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../Styles/InitialLoadingScreenStyles'
import { AuthActions, AuthSelectors } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { ScreenNames } from '../../../Constants/ScreenNames'

const InitialLoadingScreen = () => {

    const dispatch = useDispatch()
    const loginData = useSelector(AuthSelectors.loginData)
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            dispatch(AuthActions.fetchInitial())
        }, 1000);
    }, [])

    useEffect(() => {
        if (loginData === null) {
            navigation.navigate(ScreenNames.AUTH.LOGIN_SCREEN)
        }
    }, [loginData])

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../Assets/Images/tiklagelsin_logo.png')} />
            </View>
        </View>
    )
}

export default InitialLoadingScreen