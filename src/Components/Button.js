import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Styles/ButtonStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = (props) => {
    const { title, textStyle } = props
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { }}
                style={styles.button}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View >
    )
}

export default Button