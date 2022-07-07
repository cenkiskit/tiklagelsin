import { StyleSheet } from "react-native";
import { deviceWidth, tiklagelsinColor } from "../../../../Constants/Layout";

export const styles = StyleSheet.create({
    container: {
        width: deviceWidth,
        height: deviceWidth * 0.22,
        backgroundColor: tiklagelsinColor,
        marginBottom: deviceWidth * 0.003,
        flexDirection: 'row'
    },
    imageContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageView: {
        width: deviceWidth * 0.15,
        height: deviceWidth * 0.15,
        borderRadius: deviceWidth,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    detailsContainer: {
        flex: 0.45,
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: deviceWidth * 0.045,
        fontWeight: 'bold'
    },
    description: {
        color: 'white',
        fontSize: deviceWidth * 0.03,
        marginTop: deviceWidth * 0.01
    },
    buttonContainer: {
        flex: 0.35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        backgroundColor: 'white',
        width: deviceWidth * 0.3,
        height: deviceWidth * 0.1,
        borderRadius: deviceWidth,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1

    },
    buttonText:{
        fontSize: deviceWidth * 0.025,
        fontWeight: 'bold'
    }
})
