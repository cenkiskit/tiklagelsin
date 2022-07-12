import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Styles/ProductItemStyles'
import { useDispatch } from 'react-redux'
import { BasketActions } from '../../Basket'

const ProductItem = (props) => {
    const { product } = props
    const dispatch = useDispatch()

    const renderContent = () => {
        let description = ""
        product.contents.map((element, index) => {
            description += index !== product.contents.length - 1 ? element + ", " : element
        })
        return description
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
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => {
                        console.log('clicked.')
                        dispatch(BasketActions.addBasket(product))
                    }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>{product.price}TL Sepete Ekle</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ProductItem