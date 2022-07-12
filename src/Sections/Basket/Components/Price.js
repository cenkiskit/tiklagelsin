import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './Styles/PriceStyles'
import { useSelector } from 'react-redux'
import { BasketSelectors } from '..'
import { discountValue } from '../../../Constants/Values'

const Price = (props) => {
    const { basketData } = props
    const basketPrice = useSelector(BasketSelectors.basketPrice)
    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        calculateDiscount()
    }, [basketPrice])

    const calculateDiscount = () => {
        if (basketData[1]) {
            setDiscount(discountValue)
        } else {
            setDiscount(0)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Fiyat</Text>
                <Text style={styles.text}>{basketPrice} TL</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>İndirim</Text>
                <Text style={styles.text}>{discount} TL</Text>
            </View>
            <View style={styles.seperator} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Toplam</Text>
                <Text style={styles.text}>{basketPrice - discount} TL</Text>
            </View>
        </View>
    )
}

export default Price