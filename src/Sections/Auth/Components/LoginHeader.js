import { View, Text } from 'react-native'
import React from 'react'
import { deviceWidth, tiklagelsinColor } from '../../../Constants/Layout'
import { styles } from './Styles/LoginHeaderStyles'

const LoginHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Tıkla Gelsin
            </Text>
        </View>
    )
}

export default LoginHeader