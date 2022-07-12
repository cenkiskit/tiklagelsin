import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BasketHeader from '../Components/BasketHeader'
import { useSelector } from 'react-redux'
import { BasketSelectors } from '..'
import BasketItem from '../Components/BasketItem'
import { products } from '../../../Constants/Data'
import { deviceWidth } from '../../../Constants/Layout'
import Price from '../Components/Price'
import { styles } from '../Styles/BasketScreenStyles'
import Button from '../../../Components/Button'
import EmptyComponent from '../../../Components/EmptyComponent'

const BasketScreen = () => {
    const basketData = useSelector(BasketSelectors.basket)
    const basketPrice = useSelector(BasketSelectors.basketPrice)
    const [discount, setDiscount] = useState(0)

    const renderItem = (item) => {
        const product = products.find(({ id }) => id == item.item)
        const size = basketData[`${item.item}`]
        return <BasketItem product={product} size={size} />
    }

    const renderFooterData = () => {
        return <SafeAreaView>
            <Price
                discount={discount}
                basketPrice={basketPrice}
                setDiscount={setDiscount}
                basketData={basketData} />

        </SafeAreaView>
    }

    const renderContent = () => {
        if (Object.keys(basketData).length > 0) {
            return <>
                <View>
                    <FlatList data={Object.keys(basketData)}
                        renderItem={renderItem}
                        ListFooterComponent={renderFooterData}
                    />
                </View>

            </>
        } else {
            return <EmptyComponent text="Sepetinizde ürün bulunmamaktadır." />
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.9 }}>
                    <BasketHeader />
                    {renderContent()}
                </View>
                <View style={{
                    flex: 0.1,
                    backgroundColor: 'white'
                }}>
                    {
                        Object.keys(basketData).length > 0 ?
                            <Button title={`${basketPrice - discount} TL Satın Al`} />
                            : null
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default BasketScreen