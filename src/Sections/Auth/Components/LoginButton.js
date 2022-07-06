import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Styles/LoginButtonStyles'

const LoginButton = (props) => {

    const { onPress, disabled } = props

    return (
        <View style={styles.container}>
            <TouchableOpacity
                disabled={disabled()}
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
    onPress: () => { },
    disabled: false
}

export default LoginButton