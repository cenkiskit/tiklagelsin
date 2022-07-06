import { StyleSheet } from "react-native";
import { deviceWidth, tiklagelsinColor } from "../../../../Constants/Layout";

export const styles = StyleSheet.create({
    input: {
        width: deviceWidth * 0.8,
        borderWidth: 2,
        borderRadius: deviceWidth,
        paddingLeft: deviceWidth * 0.05,
        borderColor: tiklagelsinColor
    }
})