import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const SignUpScreen = (props) => {
    const { navigation } = props
    const goToPage = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Enter your name" />
            <TextInput style={styles.input} placeholder="Enter your email" />
            <TextInput style={styles.input} placeholder="Enter your password" />
            <View style={styles.containerTextTerms}>
                <Text>
                    I agree to the medidoc
                </Text>
                <TouchableOpacity>
                    <Text style={styles.textGreen}>Terms of Service</Text>
                </TouchableOpacity>
                <Text>and</Text>
                <TouchableOpacity>
                    <Text style={styles.textGreen}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btnCrearCuenta}>
                <Text style={styles.textBtnCrearCuenta}>Crear Cuenta</Text>
            </TouchableOpacity>
            <View style={styles.textTopContainer}>
                <Text>Already an account?</Text>
                <TouchableOpacity onPress={() => goToPage('Inicio de Sesion')}>
                    <Text style={styles.textGreen}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export { SignUpScreen }

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#fff',
        width: '100%',
    },
    input: {
        width: '90%',
        backgroundColor: '#F5F5F5',
        paddingVertical: 15,
        paddingStart: 20,
        marginHorizontal: 'auto',
        marginVertical: 10,
        borderRadius: 50
    },
    containerTextTerms: {
        flexDirection: 'row',
        marginHorizontal: 'auto',
        justifyContent: 'center',
        width: 139,
        marginTop: 10
    },
    textGreen: {
        color: '#199A8E',
        marginHorizontal: 5
    },
    btnCrearCuenta: {
        width: '90%',
        backgroundColor: '#199A8E',
        marginHorizontal: 'auto',
        paddingVertical: 15,
        marginTop: 20,
        borderRadius: 50
    },
    textBtnCrearCuenta: {
        color: '#fff',
        textAlign: 'center',
    },
    textTopContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    }
})