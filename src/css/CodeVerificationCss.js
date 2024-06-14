import { StyleSheet } from "react-native";

const codeStyles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'whitesmoke'
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#5C5C5C',
        marginTop: 30
    },
    input: {
        borderWidth: 2,
        borderColor: '#199A8E',
        width: 50,
        height: 50,
        marginHorizontal: 10,
        fontSize: 30,
        color: '#199A8E',
        textAlign: 'center',
        fontWeight: 'bold',
        borderRadius: 10
    },
    inputContainer: {
        flexDirection: 'row',
        height: 100,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnVerify: {
        width: '80%',
        backgroundColor: '#199A8E',
        marginHorizontal: 'auto',
        marginTop: 30,
        paddingVertical: 15,
        borderRadius: 50
    },
    textBtnVerify: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    }
})
export { codeStyles }