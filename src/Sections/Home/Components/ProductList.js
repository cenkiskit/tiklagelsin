import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import ProductItem from './ProductItem'
import { products } from '../../../Constants/Data'

const ProductList = () => {

    const renderItem = ({ item }) => {
        return <ProductItem
            product={item}
            price={item.price}
            title={item.title}
            contents={item.contents} />
    }

    return (
        <FlatList data={products}
            renderItem={renderItem} />
    )
}

export default ProductList