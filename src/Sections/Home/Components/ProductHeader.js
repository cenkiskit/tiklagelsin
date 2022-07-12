import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Styles/ProductHeaderStyles'
import { useDispatch, useSelector } from 'react-redux'
import { BasketSelectors } from '../../Basket'
import { useNavigation } from '@react-navigation/native'
import { ScreenNames } from '../../../Constants/ScreenNames'
import { AuthActions } from '../../Auth'

const ProductHeader = () => {
    const basketSize = useSelector(BasketSelectors.basketSize)
    const navigation = useNavigation()
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <View style={styles.leftIconContainer}>
                <TouchableOpacity
                    onPress={() => dispatch(AuthActions.fetchLogout())}
                    style={styles.leftIconImageContainer}>
                    <Image style={styles.image} source={require('../../../Assets/Images/exit-2.png')} />
                </TouchableOpacity>

            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Ürün Listesi</Text>
            </View>
            <View style={styles.rightIconContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(ScreenNames.HOME.BASKET_SCREEN)}
                    style={styles.rightIconImageContainer}>
                    <Text style={styles.countText}>
                        {basketSize}
                    </Text>
                    <Image style={styles.image} source={require('../../../Assets/Images/shopping-basket.png')} />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ProductHeader