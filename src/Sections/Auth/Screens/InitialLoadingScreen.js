import { View, Image, Linking } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../Styles/InitialLoadingScreenStyles'
import { AuthActions, AuthSelectors } from '..'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { ScreenNames } from '../../../Constants/ScreenNames'
import { products } from '../../../Constants/Data'
import { BasketOperations } from '../../../Constants/Values'
import { BasketActions } from '../../Basket'

const InitialLoadingScreen = () => {

    const dispatch = useDispatch()
    const loginData = useSelector(AuthSelectors.loginData)
    const navigation = useNavigation()

    useEffect(() => {
        Linking.addEventListener('url', handleOpenURL)
        Linking.getInitialURL().then(url => {
            console.log('URL:', url)
          });
        setTimeout(() => {
            dispatch(AuthActions.fetchInitial())
        }, 1000);
    }, [])

    const handleOpenURL = ({event}) => {
        const url = event.url
        if (url) {
            const productId = url.split("tiklagelsin?id=")[1]
            const product = products.find(x => x.id == productId)
            console.log('productExist', product)
            if (product) {
                dispatch(BasketActions.addBasket({ product: product, basketType: BasketOperations.ADD_PRODUCT }))
            }
        }
    }

    useEffect(() => {
        if (loginData === null) {
            navigation.replace(ScreenNames.AUTH.LOGIN_SCREEN)
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