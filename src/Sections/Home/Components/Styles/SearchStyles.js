import { StyleSheet } from "react-native";
import { deviceWidth } from "../../../../Constants/Layout";

export const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: deviceWidth * 0.12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subContainer: {
        width: deviceWidth * 0.9,
        height: deviceWidth * 0.08,
        backgroundColor: 'white',
        borderRadius: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1
    },
    iconContainer: {
        flex: 0.1,
        paddingLeft: deviceWidth * 0.03,
    },
    iconView: {
        width: deviceWidth * 0.05,
        height: deviceWidth * 0.05,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    inputContainer: {
        flex: 0.9,
        paddingRight:deviceWidth*0.05
    }
})