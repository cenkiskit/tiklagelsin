import { StyleSheet } from "react-native";
import { deviceWidth, tiklagelsinColor } from "../../../../Constants/Layout";

export const styles = StyleSheet.create({
    container: {
        paddingBottom: deviceWidth * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth * 0.05,
    },
    button: {
        width: deviceWidth * 0.8,
        height: deviceWidth * 0.12,
        borderRadius: deviceWidth,
        backgroundColor: tiklagelsinColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: deviceWidth * 0.04,
        fontWeight: 'bold'
    }
})