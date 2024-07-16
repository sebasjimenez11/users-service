import DoctorDto from "../dto/Doctor";
import db from "../config/configBd"
import generateHash from "../helpers/generateHash";



export default class DoctorRepository{
    
    static async registerDoctor(doctor:DoctorDto){
        try {
            const password = await generateHash(doctor.password);
            doctor.password =  password;
            await db.execute('CALL InsertDoctor (?,?,?,?,?,?,?,?,?,?)', [doctor.tarjetaProf, doctor.documento, doctor.nombre, doctor.apellido, doctor.rol, doctor.email, doctor.foto, doctor.password, doctor.valorCita ,doctor.codigoEspc])
            return {status: "Doctor inserted correctly", register : true}
        } catch (error) {
            console.log(error)
            return {status: error.message, register : false}
        }
    }

    static async getAllDoctors() {
        try {
            const [rows] = await db.execute("CALL ListMedicos()");
            return { message: 'Doctors retrieved successfully', data: [rows[0]] };
        } catch (error) {
            console.error('Error retrieving specialties:', error);
            return { message: 'Failed to retrieve doctors', data: error };
        }
    }

    static async getDoctorById(email: string) {
        try {
            console.log(email);
        
            const [rows] = await db.execute("CALL GetDoctorByEmail(?)", [email]);
            return { message: 'Specialties retrieved successfully', doctor: rows[0][0] };
        } catch (error) {
            console.error('Error retrieving specialties:', error);
            return { message: 'Failed to retrieve doctor'};
        }
    }

    static async getDoctorCatalog (){
        try {
            const [rows] = await db.execute("SELECT * FROM vista_doctores");
            return { message: 'Doctors retrieved successfully', data: [rows[0]] };
        } catch (error) {
            console.error('Error retrieving specialties:', error);
            return { message: 'Failed to retrieve doctor', data: error };
        }
    }
}