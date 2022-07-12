import { StyleSheet } from "react-native";
import { deviceWidth } from "../../../../Constants/Layout";

export const styles = StyleSheet.create({
    container: {
        marginLeft: deviceWidth * 0.05,
        width: deviceWidth * 0.5,
        height: deviceWidth*0.5,
        maxHeight: deviceWidth * 0.4
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'center',
        flexDirection: 'row'
    },
    text: {
        color: 'black',
        fontSize: deviceWidth * 0.06
    },
    seperator:{
        width: deviceWidth * 0.5,
        height: deviceWidth * 0.002,
        backgroundColor: 'black'
    }
})