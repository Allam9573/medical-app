import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    con: {
        backgroundColor: '#fff',
        width: '100%',
        height: '40%',
        position: 'absolute',
        bottom: 0,
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        elevation: 5
    },
    image: {
        width: 250,
        height: 300,
        marginTop: 60
    },
    text: {
        fontSize: 20,
        marginHorizontal: 30,
        textAlign: 'center',
        marginTop: 50,
        color: '#757575'
    },
    btnNext: {
        backgroundColor: '#199A8E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '50%',
        marginHorizontal: 'auto',
        marginTop: 30,
        elevation: 3
    },
    textBtnNext: {
        textAlign: 'center',
        color: '#fff'
    }
});
export { styles }