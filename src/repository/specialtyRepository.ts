import db from '../config/configBd';
import SpecialtyDto from '../dto/Specialty';

export default class SpecialtyRepository {

    static async createSpecialty(specialty: SpecialtyDto){
        try {
            await db.execute("CALL AddEspecialidad(?,?,?)", [specialty.codigoEspc, specialty.nombre, specialty.descripcion]);
            return { success: true, message: "Specialty inserted correctly"};
        } catch (error) {
            console.error('Error creating specialty:', error);
            return { success: false, message: 'Failed to insert specialty', data: error };
        }
    }

    static async getAllSpecialties() {
        try {
            const [rows] = await db.execute("CALL ListEspecialidades()");
            return { message: 'Specialties retrieved successfully', data: rows[0] };
        } catch (error) {
            console.error('Error retrieving specialties:', error);
            return { message: 'Failed to retrieve specialties', data: error };
        }
    }
    
}
 