import React from 'react'
import { View, Text, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { deviceWidth, tiklagelsinColor } from '../../../Constants/Layout'
import ProductHeader from '../Components/ProductHeader'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{
        backgroundColor: 'red',
        width: deviceWidth,
        height: deviceWidth * 0.3
      }}>
        <ProductHeader />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen