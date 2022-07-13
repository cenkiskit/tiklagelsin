import React, { useState } from 'react'
import { View } from 'react-native'
import LoginHeader from '../Components/LoginHeader'
import LoginInput from '../Components/LoginInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoginButton from '../Components/LoginButton'
import { styles } from '../Styles/LoginScreenStyles'
import { isEmail } from '../Utils/EmailUtils'
import { useDispatch } from 'react-redux'
import { AuthActions } from '..'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [wrongEmail, setWrongEmail] = useState(false)

    const dispatch = useDispatch()

    const _onChangeEmail = (text) => {
        setMail(text)
    }

    const _onChangePassword = (text) => {
        setPassword(text)
    }

    const _onPressLogin = () => {
        dispatch(AuthActions.fetchLogin({
            mail: mail,
            password: password
        }))
    }

    const _onBlurMail = () => {
        const isMail = isEmail(mail)
        if (isMail) {
            wrongEmail ? setWrongEmail(false) : null
        } else {
            setWrongEmail(true)
        }
    }

    const _onFocusMail = () => {
        setWrongEmail(false)
    }

    const isButtonDisabled = () => {
        if (!wrongEmail && mail && password) return false
        return true
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView
                contentContainerStyle={styles.keyboardViewContainer}
                enableOnAndroid
                keyboardShouldPersistTaps={"handled"}
                extraHeight={110}
                showsVerticalScrollIndicator={false} >
                <LoginHeader />
                <View style={styles.inputContainer}>
                    <View>
                        <LoginInput
                            placeholder="E-mail"
                            onChangeText={_onChangeEmail}
                            value={mail}
                            wrong={wrongEmail}
                            onBlur={_onBlurMail}
                            onFocus={_onFocusMail} />
                    </View>
                    <View style={styles.passwordContainer}>
                        <LoginInput
                            placeholder="Şifre"
                            onChangeText={_onChangePassword}
                            value={password}
                            secureTextEntry={true} />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <LoginButton
                        disabled={isButtonDisabled}
                        onPress={_onPressLogin} />
                </View>
            </KeyboardAwareScrollView>

        </SafeAreaView >
    )
}

export default LoginScreen