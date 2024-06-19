import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const LoginScreen = (props) => {
    const { navigation } = props
    const goToPage = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Enter your email" />
                <TextInput style={styles.input} placeholder="Enter your password" />
                <TouchableOpacity onPress={() => goToPage('Enter Code Verification')}>
                    <Text style={styles.textForgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.textBtnLogin}>Login</Text>
                </TouchableOpacity>
                <View style={styles.text2Container}>
                    <Text style={styles.text2}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => goToPage('Crear Cuenta')}>
                        <Text style={{ color: '#199A8E' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textOR}>OR</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnGoogle}>
                        <Image style={styles.logoGoogle} source={require('../images/icons/google.png')} />
                        <Text style={styles.textBtnGoogle}>Sign in with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnGoogle}>
                        <Image style={styles.logoGoogle} source={require('../images/icons/apple.png')} />
                        <Text style={styles.textBtnGoogle}>Sign in with Apple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnGoogle}>
                        <Image style={styles.logoGoogle} source={require('../images/icons/facebook.png')} />
                        <Text style={styles.textBtnGoogle}>Sign in with Facebook</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => goToPage('Unete a Medical App')}>
                    <Text>Atras</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => goToPage('Especialidades Medicas')}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export { LoginScreen }

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff'
    },
    inputContainer: {
        width: '100%',
        marginTop: 20
    },
    input: {
        paddingVertical: 15,
        paddingStart: 20,
        marginHorizontal: 'auto',
        width: '80%',
        marginVertical: 10,
        borderRadius: 50,
        backgroundColor: '#F1F1F1'
    },
    textForgotPassword: {
        color: '#199A8E',
        textAlign: 'right',
        marginHorizontal: 'auto',
        width: '80%',
    },
    btnLogin: {
        width: '80%',
        backgroundColor: '#199A8E',
        marginHorizontal: 'auto',
        marginTop: 20,
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 50
    },
    textBtnLogin: {
        color: '#fff',
        textAlign: 'center'
    },
    text2Container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    text2: {
        color: '#929292',
        marginRight: 5
    },
    textOR: {
        color: '#929292',
        textAlign: 'center',
        marginTop: 30,
        fontWeight: 'bold'
    },
    btnContainer: {
        width: '100%',
        marginHorizontal: 'auto',
        marginTop: 30
    },
    btnGoogle: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#DFDFDF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 'auto',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 50,
        marginBottom: 20,
    },
    logoGoogle: {
        width: 20,
        height: 20
    },
    textBtnGoogle: {
        color: 'gray',
        fontWeight: 'bold'
    }
})