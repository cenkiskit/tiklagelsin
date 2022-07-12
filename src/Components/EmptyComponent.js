import { View, Text } from 'react-native'
import React from 'react'
import { deviceWidth } from '../Constants/Layout'

const EmptyComponent = (props) => {
    const { text } = props

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text
                style={{
                    textAlign: 'center',
                    fontSize: deviceWidth * 0.06
                }}>{text}</Text>
        </View>
    )
}

export default EmptyComponent