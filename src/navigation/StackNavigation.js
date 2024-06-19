import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { PacienteScreen } from "../screens/PacienteScreen";
import { DrugstoreScreen } from "../screens/DrugstoreScreen";
import { AuthScreen } from "../screens/AuthScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { CodeVerification } from "../screens/CodeVerification";
import { EspecialidadScreen } from "../screens/EspecialidadScreen";
import { NuevaEspecialidad } from "../screens/NuevaEspecialidad";

const Stack = createStackNavigator()

const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Agregar Especialidad" component={NuevaEspecialidad} />
            <Stack.Screen name="Especialidades Medicas" component={EspecialidadScreen} />
            <Stack.Screen name="Bienvenido" component={WelcomeScreen} />
            <Stack.Screen name="Enter Code Verification" component={CodeVerification} />
            <Stack.Screen name="Pacientes" component={PacienteScreen} />
            <Stack.Screen name="Medicamentos" component={DrugstoreScreen} />
            <Stack.Screen name="Unete a Medical App" component={AuthScreen} />
            <Stack.Screen name="Inicio de Sesion" component={LoginScreen} />
            <Stack.Screen name="Crear Cuenta" component={SignUpScreen} />
        </Stack.Navigator>
    )
}
export { StackNavigation }