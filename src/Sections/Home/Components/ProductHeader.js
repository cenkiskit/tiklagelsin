import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Styles/ProductHeaderStyles'
import { useSelector } from 'react-redux'
import { BasketSelectors } from '../../Basket'

const ProductHeader = () => {
    const basketSize = useSelector(BasketSelectors.basketSize)

    return (
        <View style={styles.container}>
            <View style={styles.leftIconContainer}>
                <TouchableOpacity style={styles.leftIconImageContainer}>
                    <Image style={styles.image} source={require('../../../Assets/Images/exit-2.png')} />
                </TouchableOpacity>

            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Ürün Listesi</Text>
            </View>
            <View style={styles.rightIconContainer}>
                <TouchableOpacity style={styles.rightIconImageContainer}>
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