import { StyleSheet } from "react-native";
import { deviceWidth, tiklagelsinColor } from "../../../../Constants/Layout";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: deviceWidth * 0.13,
        flexDirection: 'row'
    },
    leftIconContainer: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftIconImageContainer: {
        width: deviceWidth * 0.1,
        height: deviceWidth * 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    titleContainer: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: tiklagelsinColor,
        fontSize: deviceWidth * 0.05
    },
    rightIconContainer: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightIconImageContainer: {
        width: deviceWidth * 0.1,
        height: deviceWidth * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    countText: {
        position: 'absolute',
        top: 0,
        right: 0,
        color: tiklagelsinColor,
        fontWeight:'bold'
    }

})