import DoctorDto from "../dto/doctor/Doctor";
import db from "../config/configBd";
import generateHash from "../helpers/generateHash";
import DoctorUpdateDto from "../dto/doctor/DoctorUpdate";

export default class DoctorRepository {
    
    static async registerDoctor(doctor: DoctorDto) {
        try {
            const password = await generateHash(doctor.password);
            doctor.password = password;
            await db.execute('CALL InsertDoctor (?,?,?,?,?,?,?,?,?,?)', [
                doctor.tarjetaProf, 
                doctor.documento, 
                doctor.nombre, 
                doctor.apellido, 
                doctor.rol, 
                doctor.email, 
                doctor.foto, 
                doctor.password, 
                doctor.valorCita, 
                doctor.codigoEspc
            ]);
            return { status: "Doctor registered successfully", register: true };
        } catch (error) {
            console.log(error);
            return { status: "Error registering doctor: " + error.message, register: false };
        }
    }

    static async getAllDoctors() {
        try {
            const [rows] = await db.execute("CALL ListMedicos()");
            return { message: 'Doctors retrieved successfully', data: rows[0] };
        } catch (error) {
            console.error('Error retrieving doctors:', error);
            return { message: 'Failed to retrieve doctors: ' + error.message, data: error };
        }
    }

    static async getDoctorByEmail(email: string) {
        try {
            const [rows] = await db.execute("CALL GetDoctorByEmail(?)", [email]);
            return { message: 'Doctor retrieved successfully', doctor: rows[0][0] };
        } catch (error) {
            console.error('Error retrieving doctor:', error);
            return { message: 'Failed to retrieve doctor: ' + error.message };
        }
    }

    static async getDoctorCatalog() {
        try {
            const [rows] = await db.execute("SELECT * FROM vista_doctores");
            return { message: 'Doctor catalog retrieved successfully', data: rows[0] };
        } catch (error) {
            console.error('Error retrieving doctor catalog:', error);
            return { message: 'Failed to retrieve doctor catalog: ' + error.message, data: error };
        }
    }

    static async updateProfileDoctor(doctor: DoctorUpdateDto) {
        try {
            await db.execute('CALL UpdateDoctor(?,?,?,?,?,?)', [
                doctor.tarjetaProf, 
                doctor.documento, 
                doctor.nombre, 
                doctor.apellido, 
                doctor.email, 
                doctor.valorCita
            ]);
            return { status: "Doctor profile updated successfully", update: true };
        } catch (error) {
            console.log(error);
            return { status: "Error updating doctor profile: " + error.message, update: false };
        }
    }
}
