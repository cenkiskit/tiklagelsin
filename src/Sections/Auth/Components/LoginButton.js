import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Styles/LoginButtonStyles'

const LoginButton = (props) => {

    const { onPress } = props

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => onPress()}
                style={styles.button}>
                <Text style={styles.text}>
                    Giriş Yap
                </Text>
            </TouchableOpacity>
        </View >
    )
}

LoginButton.defaultProps = {
    onPress: () => {}
}

export default LoginButton