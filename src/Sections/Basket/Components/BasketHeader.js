import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Styles/BasketHeaderStyles'
import { useSelector } from 'react-redux'
import { BasketSelectors } from '../../Basket'
import { useNavigation } from '@react-navigation/native'
import { ScreenNames } from '../../../Constants/ScreenNames'

const BasketHeader = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.leftIconContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.leftIconImageContainer}>
                    <Image style={styles.image} source={require('../../../Assets/Images/left.png')} />
                </TouchableOpacity>

            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Sepet</Text>
            </View>
            <View style={styles.rightIconContainer}>

            </View>
        </View>
    )
}

export default BasketHeader