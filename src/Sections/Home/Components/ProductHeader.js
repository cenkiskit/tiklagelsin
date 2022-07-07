import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './Styles/ProductHeaderStyles'

const ProductHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftIconContainer}>
                <View style={styles.leftIconImageContainer}>
                    <Image style={styles.image} source={require('../../../Assets/Images/exit-2.png')} />
                </View>

            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Ürün Listesi</Text>
            </View>
            <View style={styles.rightIconContainer}>
                <View style={styles.rightIconImageContainer}>
                    <Text style={styles.countText}>1</Text>
                    <Image style={styles.image} source={require('../../../Assets/Images/shopping-basket.png')} />
                </View>

            </View>
        </View>
    )
}

export default ProductHeader