import db from '../config/configBd';
import SpecialtyDto from '../dto/specialty/Specialty';

export default class SpecialtyRepository {

    static async createSpecialty(specialty: SpecialtyDto){
        try {
            await db.execute("CALL InsertSpecialty(?,?,?)", [specialty.codigoEspc, specialty.nombre, specialty.descripcion]);
            return { success: true, message: "Specialty inserted correctly"};
        } catch (error) {
            console.error('Error creating specialty:', error);
            return { success: false, message: 'Failed to insert specialty', data: error };
        }
    }

    static async getAllSpecialties() {
        try {
            const [rows] = await db.execute("CALL ListSpecialties()");
            return { message: 'Specialties retrieved successfully', data: rows[0] };
        } catch (error) {
            console.error('Error retrieving specialties:', error);
            return { message: 'Failed to retrieve specialties', data: error };
        }
    }

    static async updateStatus(estado: string, codigoEspc: string) {
        try {
            const [row] = await db.execute('UPDATE especialidad SET Estado = ? WHERE Codigo_Espc = ?', [estado, codigoEspc]);
    
            return {
                update: true,
                message: 'Actualización de estado exitosa'
            };
        } catch (error) {
            throw new Error('Error actualizando el estado: ' + error.message);
        }
    }
    
}
 