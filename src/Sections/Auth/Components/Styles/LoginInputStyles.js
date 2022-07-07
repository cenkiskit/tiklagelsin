import { Platform, StyleSheet } from "react-native";
import { deviceWidth, tiklagelsinColor } from "../../../../Constants/Layout";

export const styles = StyleSheet.create({
    input: {
        width: deviceWidth * 0.8,
        borderWidth: 2,
        borderRadius: deviceWidth,
        paddingLeft: deviceWidth * 0.05,
        padding: Platform.OS === 'ios' ? deviceWidth * 0.04 : 0,
        borderColor: tiklagelsinColor
    },
    wrongTextContainer: {
        paddingLeft: deviceWidth * 0.05,
        marginTop: deviceWidth * 0.01,
    },
    wrongText: {
        color: tiklagelsinColor,
        fontWeight: 'bold'
    }
})