import DoctorDto from "../dto/doctor/Doctor";
import db from "../config/configBd";
import DoctorUpdateDto from "../dto/doctor/DoctorUpdate";

export default class DoctorRepository {
    
    static async registerDoctor(doctor: DoctorDto) {
        try {
            await db.execute('CALL InsertDoctor(?,?,?,?,?,?,?,?,?,?,?)', [
                doctor.ID,
                doctor.tarjetaProf, 
                doctor.documento, 
                doctor.nombre, 
                doctor.apellido, 
                doctor.rol, 
                doctor.email, 
                doctor.fotoUrl, 
                doctor.password, 
                doctor.valorCita, 
                doctor.codigoEspc
            ]);
            return { status: "Doctor registered successfully", register: true};
        } catch (error) {
            console.log(error);
            return { status: "Error registering doctor: " + error.message, register: false };
        }
    }

    static async getAllDoctors() {
        try {
            const [rows] = await db.execute("CALL ListDoctors()");
            return { message: 'Doctors retrieved successfully', data: rows};
        } catch (error) {
            console.error('Error retrieving doctors:', error);
            return { message: 'Failed to retrieve doctors: ' + error.message, data: error };
        }
    }

    static async getDoctorById(ID: string) {
        try {
            const [rows] = await db.execute("CALL GetDoctorById(?)", [ID]);
            return { message: 'Doctor retrieved successfully', doctor: rows[0][0] };
        } catch (error) {
            console.error('Error retrieving doctor:', error);
            return { message: 'Failed to retrieve doctor: ' + error.message };
        }
    }

    static async getDoctorCatalog() {
        try {
            const [rows] = await db.execute("SELECT * FROM vista_doctores WHERE estado = 'activo'");
            return { message: 'Doctor catalog retrieved successfully', data: rows };
        } catch (error) {
            console.error('Error retrieving doctor catalog:', error);
            return { message: 'Failed to retrieve doctor catalog: ' + error.message, data: error };
        }
    }

    static async updateProfileDoctor(doctor: DoctorUpdateDto) {
        try {
            await db.execute('CALL UpdateDoctor(?,?,?,?,?,?,?)', [
                doctor.ID,
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

    static async UpdateDoctorProfilePic(ID:string, fotoUrl:string){
        try {
            await db.execute('CALL UpdateDoctorProfilePic(?,?)',[ID,fotoUrl]);
            return { status: "Doctor profile picture updated successfully", update: true };
        } catch (error) {
            console.log(error);
            return { status: error.message , update: false}
        }
    }
}
