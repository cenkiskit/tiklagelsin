import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BasketHeader from '../Components/BasketHeader'
import { useSelector } from 'react-redux'
import { BasketSelectors } from '..'
import BasketItem from '../Components/BasketItem'
import { products } from '../../../Constants/Data'

const BasketScreen = () => {
    const basketData = useSelector(BasketSelectors.basket)

    const renderItem = (item) => {
        const product = products.find(({ id }) => id == item.item)
        return <BasketItem product={product} size={basketData[`${item.item}`]} />
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <BasketHeader title="Sepet" />

            <FlatList data={Object.keys(basketData)}
                renderItem={renderItem} />
        </SafeAreaView>
    )
}

export default BasketScreen