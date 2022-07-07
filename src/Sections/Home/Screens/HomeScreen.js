import React, { useState } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { deviceWidth, tiklagelsinColor } from '../../../Constants/Layout'
import ProductHeader from '../Components/ProductHeader'
import ProductList from '../Components/ProductList'
import Search from '../Components/Search'

const HomeScreen = () => {

  const [searchText, setSearchText] = useState("")

  const _onChangeSearch = (text) => {
    setSearchText(text)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{
        backgroundColor: 'white',
        width: deviceWidth,
        height: deviceWidth * 0.26
      }}>
        <ProductHeader />
        <Search
          onChange={_onChangeSearch}
          value={searchText} />
      </View>
      <ProductList />
    </SafeAreaView>
  )
}

export default HomeScreen