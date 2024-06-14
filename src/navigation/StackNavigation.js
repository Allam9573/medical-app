import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { PacienteScreen } from "../screens/PacienteScreen";
import { DrugstoreScreen } from "../screens/DrugstoreScreen";
import { AuthScreen } from "../screens/AuthScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { CodeVerification } from "../screens/CodeVerification";

const Stack = createStackNavigator()

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Enter Code Verification" component={CodeVerification} />
            <Stack.Screen name="Bienvenido" component={WelcomeScreen} />
            <Stack.Screen name="Pacientes" component={PacienteScreen} />
            <Stack.Screen name="Medicamentos" component={DrugstoreScreen} />
            <Stack.Screen name="Unete a Medical App" component={AuthScreen} />
            <Stack.Screen name="Inicio de Sesion" component={LoginScreen} />
            <Stack.Screen name="Crear Cuenta" component={SignUpScreen} />
        </Stack.Navigator>
    )
}
export { StackNavigation }