import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Styles/PriceStyles'

const Price = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Fiyat</Text>
                <Text style={styles.text}>43 TL</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>İndirim</Text>
                <Text style={styles.text}>3 TL</Text>
            </View>
            <View style={styles.seperator} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>Toplam</Text>
                <Text style={styles.text}>40 TL</Text>
            </View>
        </View>
    )
}

export default Price