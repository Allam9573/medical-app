import axios from "axios";

class EspecialidadService {

    listarEspecialidades() {
        return axios.get('http://192.168.121.129:8080/api/especialidades')
    }
    crearEspecialidad(especialidad) {
        return axios.post('http://192.168.121.129:8080/api/especialidades/crear', especialidad)

    }

}
export default new EspecialidadService();