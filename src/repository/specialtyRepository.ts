import db from '../config/configBd';
import SpecialtyDto from '../dto/Specialty';

export default class SpecialtyRepository {
    
    static async Create(specialty: SpecialtyDto){
        try {
            await db.query("CALL AddEspecialidad(?,?,?)",[specialty.codigoEspc,specialty.nombre,specialty.descripcion])
            return {create: true, status: "Specialty inserted correctly"}
        } catch (error) {
            return {create: false, status: error};
        }
    }

    static async getSpecialties(cod : number){
       try {
        
       } catch (error) {
        
       }
    }

}