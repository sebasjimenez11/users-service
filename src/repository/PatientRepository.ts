import PatientDto from "../dto/patient/Patient";
import PatientUpdateDto from "../dto/patient/PatientUpdate";
import db from "../config/configBd"

export default class PatientRepository {

        static async Register(patient:PatientDto){
            try {  
                await db.execute('CALL InsertPatient(?,?,?,?,?,?,?,?,?)',
                [
                    patient.ID,  
                    patient.documentoPac, 
                    patient.tipoDoc, 
                    patient.nombre, 
                    patient.apellido,
                    patient.email,  
                    patient.rol, 
                    patient.fechaNac, 
                    patient.password
                ]);

                return {register: true,status: "user inserted correctly", email: patient.email}
            } catch (error) {
                console.log(error);
                return {register: false, status:error}
            }
        }

    static async getAllPatients(){
        try {
            const [rows] = await db.execute('CALL ListPatients()');
            return {message: '', data: rows[0]};
        } catch (error) {
            console.log(error);
            return {message: error.message, data: null};
        }
    }

    static async getPacienteByEmail(ID:string){
        try {
            const [rows] = await db.execute('CALL GetPatientById(?)',[ID]);
            return {message: '', data: rows[0][0]};
        } catch (error) {
            console.log(error);
            return {message: error.message, data: null};
        }
    }

    static async updateProfilePatient (patient: PatientUpdateDto){
        try {
            await db.execute('CALL UpdatePatient(?,?,?,?,?,?,?,?,?)',
            [  
                patient.ID,
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

    static async UpdatePatientProfilePic(ID:string, fotoUrl:string){
        try {
            await db.execute('CALL UpdatePatientProfilePic(?,?)',[ID,fotoUrl]);
            return { status: "Patient profile picture updated successfully", update: true};
        } catch (error) {
            console.log(error);
            return { status: error.message , update: false}
        }
    }
}