import { StyleSheet } from "react-native";
import { deviceWidth } from "../../../Constants/Layout";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    keyboardViewContainer: {
        backgroundColor: 'white',
        flexGrow: 1,
        justifyContent: 'space-between'
    },
    inputContainer: {
        flex: 0.5,
        alignItems: 'center',
        marginTop: deviceWidth * 0.1
    },
    passwordContainer: {
        marginTop: deviceWidth * 0.1
    },
    buttonContainer: {
        flex: 0.5,
        justifyContent: 'flex-end'
    }
})