import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BasketHeader from '../Components/BasketHeader'

const BasketScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <BasketHeader title="Sepet"/>
        </SafeAreaView>
    )
}

export default BasketScreen