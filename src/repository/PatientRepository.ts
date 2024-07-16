import PatientDto from "../dto/Patient";
import db from "../config/configBd"
import generateHash from "../helpers/generateHash";

export default class PatientRepository {

    static async Register(patient:PatientDto){
        try {
            const password = await generateHash(patient.password);
            patient.password =  password;
            await db.execute('CALL AddPaciente(?,?,?,?,?,?,?,?)',
            [patient.documentoPac, patient.tipoDoc, patient.nombre, patient.apellido, patient.email,  patient.rol, patient.fechaNac, patient.password]);
            return {register: true,status: "user inserted correctly",}
        } catch (error) {
            console.log(error);
            return {register: false, status:error.message}
        }
    }
}