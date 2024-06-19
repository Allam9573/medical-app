import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "../css/EspecialidadesCss"
import { useEffect, useState } from "react"
import EspecialidadService from "../services/EspecialidadService"
const EspecialidadScreen = (props) => {
    const { navigation } = props
    const goToPage = (screen) => {
        navigation.navigate(screen)
    }

    const [especialidades, setEspecialidades] = useState([])

    useEffect(() => {
        EspecialidadService.listarEspecialidades()
            .then(response => {
                setEspecialidades(response.data)
            })
            .catch(error => {
                console.log('Ocurrio un error de conexion: ' + error)
            })
    }, [])
    return (
        <View >
            {
                especialidades.length === 0 ?
                    <View style={styles.container}>
                        <Text style={styles.title}>No hay especialidades registradas</Text>
                        <TouchableOpacity style={styles.btnCrearEspecialidad}>
                            <Text style={styles.textBtnCrearEspecialidad}>Crear Especialidad</Text>
                        </TouchableOpacity>
                    </View> :
                    <View></View>
            }
            <TouchableOpacity onPress={() => goToPage('Inicio de Sesion')}>
                <Text>Atras</Text>
            </TouchableOpacity>
        </View>
    )
}
export { EspecialidadScreen }