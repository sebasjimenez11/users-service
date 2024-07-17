import PatientDto from "../dto/patient/Patient";
import PatientUpdateDto from "../dto/patient/PatientUpdate";
import db from "../config/configBd"
import generateHash from "../helpers/generateHash";
import { getDoctorByEmailController } from "../controller/DoctorController";

export default class PatientRepository {

    static async Register(patient:PatientDto){
        try {
            const password = await generateHash(patient.password);
            patient.password =  password;
            await db.execute('CALL AddPaciente(?,?,?,?,?,?,?,?)',
            [
                patient.documentoPac, 
                patient.tipoDoc, 
                patient.nombre, 
                patient.apellido,
                patient.email,  
                patient.rol, 
                patient.fechaNac, 
                patient.password
            ]);

            return {register: true,status: "user inserted correctly",}
        } catch (error) {
            console.log(error);
            return {register: false, status:error.message}
        }
    }

    static async getAllPatients(){
        try {
            const [rows] = await db.execute('CALL ListPacientes()');
            return {message: '', data: rows[0]};
        } catch (error) {
            console.log(error);
            return {message: error.message, data: null};
        }
    }

    static async getPatientByEmail(email:string){
        try {
            const [rows] = await db.execute('CALL GetPacienteByEmail(?)',[email]);
            return {message: '', data: rows[0][0]};
        } catch (error) {
            console.log(error);
            return {message: error.message, data: null};
        }
    }

    static async updateProfilePatient (patient: PatientUpdateDto){
        try {
            console.log(patient)
            await db.execute('CALL UpdatePaciente(?,?,?,?,?,?,?,?)',
            [
                patient.documentoPac, 
                patient.tipoDoc, 
                patient.nombre, 
                patient.apellido, 
                patient.email, 
                patient.telefono, 
                patient.direccion, 
                patient.fechaNac
            ]);

            return {update: true,status: "patinet update correctly",}

        } catch (error) {
            console.log(error);
            return {update: false, status:error.message}
        }
    }
}