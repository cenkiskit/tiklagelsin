import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import LoginHeader from '../Components/LoginHeader'
import LoginInput from '../Components/LoginInput'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LoginButton from '../Components/LoginButton'
import { styles } from '../Styles/LoginScreenStyles'

const LoginScreen = () => {

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [wrognEmail, setWrongEmail] = useState(false)

    const _onChangeEmail = (text) => {
        setMail(text)
    }

    const _onChangePassword = (text) => {
        setPassword(text)
    }

    const _onPressLogin = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(mail) === false) {
            setWrongEmail(true)
        } else {
            wrognEmail ? setWrongEmail(false) : null
            //TODO: burada anasayfaya yönlendirme yap.
        }
    }

    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
                contentContainerStyle={styles.keyboardViewContainer}
                enableOnAndroid
                keyboardShouldPersistTaps={"handled"}
                extraHeight={110}
                showsVerticalScrollIndicator={false} >
                <LoginHeader />
                <View style={styles.inputContainer}>
                    <LoginInput
                        placeholder="E-mail"
                        onChangeText={_onChangeEmail}
                        value={mail} />
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
                        onPress={_onPressLogin} />
                </View>
            </KeyboardAwareScrollView>

        </View >
    )
}

export default LoginScreen