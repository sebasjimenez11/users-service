import DoctorDto from "../dto/Doctor";
import db from "../config/configBd"



export default class DoctorRepository{
    
    static async register(doctor:DoctorDto){
        try {
            console.log(doctor.apellido);
            
            await db.query('CALL InsertDoctor (?,?,?,?,?,?,"Activo", "Disponible", ?, ?, ?)', [
                doctor.tarjetaProf,
                doctor.documento,
                doctor.nombre,
                doctor.apellido,
                doctor.rol,
                doctor.email,
                doctor.foto,
                doctor.password,
                doctor.codigoEspc
            ]);

            return {status: "Doctor inserted correctly", register : true}
        } catch (error) {
            console.log(error)
            return {status: error.message, register : true}
        }
    }
}