import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BasketHeader from '../Components/BasketHeader'
import { useSelector } from 'react-redux'
import { BasketSelectors } from '..'
import BasketItem from '../Components/BasketItem'
import { products } from '../../../Constants/Data'
import { deviceWidth } from '../../../Constants/Layout'
import Price from '../Components/Price'
import { styles } from '../Styles/BasketScreenStyles'

const BasketScreen = () => {
    const basketData = useSelector(BasketSelectors.basket)

    const renderItem = (item) => {
        const product = products.find(({ id }) => id == item.item)
        const size = basketData[`${item.item}`]
        return <BasketItem product={product} size={size} />
    }

    const renderContent = () => {
        if (Object.keys(basketData).length > 0) {
            return <>
                <View>
                    <FlatList data={Object.keys(basketData)}
                        renderItem={renderItem} />
                </View>
                <Price basketData={basketData} />
            </>
        } else {
            return <View style={styles.blankContainer}>
                <Text style={styles.blankText}>Sepetinizde Ürün Bulunmamaktadır.</Text>
            </View>
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <BasketHeader />
            {renderContent()}

        </SafeAreaView>
    )
}

export default BasketScreen