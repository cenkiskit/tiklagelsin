import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Styles/ProductItemStyles'

const ProductItem = () => {
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
                    <Text style={styles.title}>Menu 1</Text>
                    <Text style={styles.description}>İçindekiler:Salatalık, Domates</Text>
                </View>

            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>3TL Sepete Ekle</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ProductItem