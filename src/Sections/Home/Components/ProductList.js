import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import ProductItem from './ProductItem'

const ProductList = () => {
    return (
        <FlatList data={[
            { key: 1, deneme: 2 },
            { key: 1, deneme: 2 },
            { key: 1, deneme: 2 },
            { key: 1, deneme: 2 },
            { key: 1, deneme: 2 },
        ]}
            renderItem={() => <ProductItem />} />
    )
}

export default ProductList