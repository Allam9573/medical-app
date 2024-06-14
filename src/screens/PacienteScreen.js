import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../css/PacienteCss"

const PacienteScreen = (props) => {
    const { navigation } = props
    const goToPage = () => {
        navigation.navigate('Medicamentos')
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../images/pacientes.png')} />
            <View style={styles.con}>
                <Text style={styles.text}>
                    Administra la informacion de tus pacientes.
                </Text>
                <TouchableOpacity onPress={goToPage} style={styles.btnNext}>
                    <Text style={styles.textBtnNext}>Siguiente</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export { PacienteScreen }