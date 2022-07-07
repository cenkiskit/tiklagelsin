import { StyleSheet } from "react-native";
import { deviceWidth } from "../../../Constants/Layout";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: deviceWidth / 1.5,
        height: deviceWidth / 1.5
    },
    image: {
        width: '100%',
        height: '100%'
    }
})