import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "../css/WelcomeCss"
import { Image } from "react-native"

const WelcomeScreen = (props) => {
    const { navigation } = props
    const goToPage = () => {
        navigation.navigate('Pacientes')
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../images/doctor.png')} />
            <View style={styles.con}>
                <Text style={styles.text}>
                    Manten el control de todo tu personal medico.
                </Text>
                <TouchableOpacity onPress={goToPage} style={styles.btnNext}>
                    <Text style={styles.textBtnNext}>Siguiente</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export { WelcomeScreen }