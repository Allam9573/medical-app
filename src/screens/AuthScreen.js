import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const AuthScreen = (props) => {
    const { navigation } = props
    const goToPage = (screen) => {
        navigation.navigate(screen)
    }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../images/logo.png')} />
            <View style={styles.containerText}>
                <Text style={styles.title}>Vamos a empezar!</Text>
                <Text style={styles.subtitle}>
                    Inicia sesion para disfrutar de todas las funciones y caracteristicas de Medical App!
                </Text>
            </View>
            <View style={styles.containerBtn}>
                <TouchableOpacity onPress={() => goToPage('Inicio de Sesion')} style={styles.btnLogin}>
                    <Text style={styles.textBtnLogin}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => goToPage('Crear Cuenta')} style={styles.btnSign}>
                    <Text style={styles.textBtnSign}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => goToPage('Medicamentos')}>
                    <Text style={{ textAlign: 'center', color: '#199A8E' }}>Atras</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export { AuthScreen }

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '60%',
        height: '35%'
    },
    containerText: {
        width: '90%',
        marginVertical: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#5A5A5A',
        textAlign: 'center',
        marginBottom: 20
    },
    subtitle: {
        color: '#878787',
        fontSize: 17,
        textAlign: 'center'
    },
    containerBtn: {
        marginVertical: 20,
        width: '100%'
    },
    btnLogin: {
        backgroundColor: '#199A8E',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '80%',
        marginHorizontal: 'auto',
        marginBottom: 20,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#199A8E',
    },
    textBtnLogin: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center',
    },
    btnSign: {
        width: '80%',
        marginHorizontal: 'auto',
        borderWidth: 1,
        borderColor: '#199A8E',
        borderRadius: 50,
        marginBottom: 10
    },
    textBtnSign: {
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        color: '#199A8E',
        fontSize: 17,
    }
})