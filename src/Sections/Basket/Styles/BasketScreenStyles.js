import { StyleSheet } from "react-native";
import { deviceWidth } from "../../../Constants/Layout";

export const styles = StyleSheet.create({
    blankContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    blankText: {
        fontSize: deviceWidth * 0.07,
        color: 'black'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})