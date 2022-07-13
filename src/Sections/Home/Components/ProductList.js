import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import ProductItem from './ProductItem'
import { products } from '../../../Constants/Data'
import EmptyComponent from '../../../Components/EmptyComponent'

const ProductList = (props) => {
    const { filterText } = props
    const [filteredData, setFilteredData] = useState(products)

    const findFilteredProducts = () => {
        let filteredProducts = []
        products.map((product) => {
            product.contents.map((content) => {
                const isContains = filteredProducts.find(item => item.id == product.id)
                if (!isContains & content.toLowerCase().includes(filterText.toLowerCase())) {
                    filteredProducts.push(product)
                }
            })
        })

        setFilteredData(filteredProducts)
    }

    useEffect(() => {
        findFilteredProducts()
    }, [filterText])

    const renderItem = ({ item }) => {
        return <ProductItem
            product={item}
            price={item.price}
            title={item.title}
            contents={item.contents} />
    }

    return filteredData.length > 0 ? (
        <FlatList data={filteredData}
            renderItem={renderItem}
        />
    ) :
        <EmptyComponent
            text="Aradığınız kriterlere uygun ürün bulunamadı." />

}

export default ProductList