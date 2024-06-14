import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../css/PacienteCss"

const DrugstoreScreen = (props) => {
    const { navigation } = props
    const goToPage = () => {
        navigation.navigate('Unete a Medical App')
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../images/drugstore.png')} />
            <View style={styles.con}>
                <Text style={styles.text}>
                    Gestiona el inventario de los farmacos de tu farmacia.
                </Text>
                <TouchableOpacity onPress={goToPage} style={styles.btnNext}>
                    <Text style={styles.textBtnNext}>Siguiente</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export { DrugstoreScreen }