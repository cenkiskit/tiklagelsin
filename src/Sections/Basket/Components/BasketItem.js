import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Styles/BasketItemStyles'
import { useDispatch } from 'react-redux'
import { BasketActions } from '../../Basket'
import { deviceWidth } from '../../../Constants/Layout'
import { BasketOperations } from '../../../Constants/Values'

const BasketItem = (props) => {
    const { product, size } = props
    const dispatch = useDispatch()

    const renderContent = () => {
        let description = ""
        product.contents.map((element, index) => {
            description += index !== product.contents.length - 1 ? element + ", " : element
        })
        return description
    }

    const addProduct = () => {
        dispatch(BasketActions.addBasket({ product: product, basketType: BasketOperations.ADD_PRODUCT }))
    }

    const deleteProduct = () => {
        dispatch(BasketActions.addBasket({ product: product, basketType: BasketOperations.DELETE_PRODUCT }))
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={styles.imageView}>
                    <Image
                        style={styles.image}
                        source={require('../../../Assets/Images/tiklagelsin_logo.png')} />
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>İçindekiler:{renderContent()}</Text>
                </View>

            </View>
            <View style={styles.sizeContainer}>
                <TouchableOpacity
                    onPress={() => addProduct()}
                    style={styles.addButton}>
                    <Text>+</Text>
                </TouchableOpacity>
                <Text style={styles.sizeText}>{size}Adet</Text>
                <TouchableOpacity
                    onPress={() => deleteProduct()}
                    style={styles.addButton}>
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BasketItem