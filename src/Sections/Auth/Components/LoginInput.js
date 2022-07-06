import { Text, TextInput, View } from 'react-native'
import React from 'react'
import { styles } from './Styles/LoginInputStyles'

const LoginInput = (props) => {

    const {
        onChangeText,
        value,
        placeholder,
        secureTextEntry,
        wrong,
        onBlur,
        onFocus } = props

    const renderWrongMessage = () => {
        if (wrong) {
            return (
                <View style={styles.wrongTextContainer}>
                    <Text style={styles.wrongText}>Geçersiz e-mail</Text>
                </View>
            )
        }
    }
    return (
        <>
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={(text) => onChangeText(text)}
                style={styles.input}
                onBlur={() => onBlur()}
                onFocus={() => onFocus()}
            />
            {
                renderWrongMessage()
            }
        </>
    )
}

LoginInput.defaultProps = {
    onChangeText: () => { },
    value: "",
    placeholder: "",
    secureTextEntry: false,
    wrong: false,
    onBlur: () => { },
    onFocus: () => { }
}

export default LoginInput