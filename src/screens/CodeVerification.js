import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native"
import { codeStyles as styles } from "../css/CodeVerificationCss"

const CodeVerification = () => {
    const handle = () => {
        Alert.alert('Verificacion de codigo')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter Verification Code</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="0" />
                <TextInput style={styles.input} placeholder="0" />
                <TextInput style={styles.input} placeholder="0" />
                <TextInput style={styles.input} placeholder="0" />
            </View>
            <TouchableOpacity onPress={handle} style={styles.btnVerify}>
                <Text style={styles.textBtnVerify}>Verificar</Text>
            </TouchableOpacity>
        </View>
    )
}
export { CodeVerification }