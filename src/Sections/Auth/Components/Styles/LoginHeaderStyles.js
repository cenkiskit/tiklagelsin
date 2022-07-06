import { StyleSheet } from "react-native";
import { deviceWidth, tiklagelsinColor } from "../../../../Constants/Layout";

export const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: deviceWidth * 0.4,
        backgroundColor: tiklagelsinColor,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: deviceWidth * 0.07,
        marginBottom: deviceWidth * 0.05
    }
})