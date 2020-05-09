import { StyleSheet, Platform } from 'react-native';

const padStyles = {
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
    },
    paragraph: {
        fontVariant: ['tabular-nums'],
        fontSize: 80,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 120,
    },
    title: {
        fontSize: 48,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttons: {
        borderColor: "#000000",
        borderWidth: 2,
        marginTop: 10,
        height: 30,
    },
    verticalSlice: {
        marginTop: 30,
    },
    iContainer: {
        flex: 1
    },
    textInputStyle: {
        borderBottomColor: "#000000",
        borderBottomWidth: 2,
        textAlign: 'center',
        fontSize: 28,
        height: 40,
        margin: 10,
        width: 28 * 4,
    },
    settingInputText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        borderColor: "#000000",
        borderWidth: 2,
        height: 40,
        width: 28 * 7,
        margin: 10,
        paddingRight: 3,
        paddingTop: 1
    },
    mainButton: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        borderColor: "#000000",
        borderWidth: 2,
        width: 262,
        margin: 10,
        padding: 20
    }
}
const iPhoneStyles = {
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
    },
    paragraph: {
        fontVariant: ['tabular-nums'],
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 40,
    },
    title: {
        fontSize: 48,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    verticalSlice: {
        marginTop: 30,
    },
    textInputStyle: {
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        textAlign: 'center',
        fontSize: 28,
        height: 40,
        margin: 5,
        width: 14 * 4,
    },
    settingInputText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        borderColor: "#000000",
        borderWidth: 1,
        height: 40,
        width: 14 * 7,
        margin: 5,
        paddingRight: 3,
        paddingTop: 1
    },
    mainButton: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        borderColor: "#000000",
        borderWidth: 1,
        width: 131,
        margin: 5,
        padding: 5
    },
}

export default styles = Platform.isPad ? StyleSheet.create(padStyles) : StyleSheet.create(iPhoneStyles)
