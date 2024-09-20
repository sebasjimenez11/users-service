import SpecialtyDto from "../dto/specialty/Specialty";
import SpecialtyRepository from "../repository/SpecialtyRepository";


export default class specialtyService{

    async create(specialtyDto: SpecialtyDto){
        return await SpecialtyRepository.createSpecialty(specialtyDto);
    }

    async getAll(){
        return await SpecialtyRepository.getAllSpecialties();
    }

    async updateStatus(estado: string, codigoEspc: string){
        return await SpecialtyRepository.updateStatus(estado, codigoEspc);
    }
}