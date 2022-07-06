import { TextInput } from 'react-native'
import React from 'react'
import { styles } from './Styles/LoginInputStyles'

const LoginInput = (props) => {

    const { onChangeText, value, placeholder, secureTextEntry } = props
    return (
        <TextInput
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={(text) => onChangeText(text)}
            style={styles.input}
        />
    )
}

LoginInput.defaultProps = {
    onChangeText: () => { },
    value: "",
    placeholder: "",
    secureTextEntry: false
}

export default LoginInput