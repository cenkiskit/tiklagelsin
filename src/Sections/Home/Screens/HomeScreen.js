import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { deviceWidth } from '../../../Constants/Layout'
import ProductHeader from '../Components/ProductHeader'
import Search from '../Components/Search'

const HomeScreen = () => {

  const [searchText, setSearchText] = useState("")

  const _onChangeSearch = (text) => {
    setSearchText(text)
  }

  return (
    <SafeAreaView>
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
    </SafeAreaView>
  )
}

export default HomeScreen