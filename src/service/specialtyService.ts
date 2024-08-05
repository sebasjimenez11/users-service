import SpecialtyDto from "../dto/specialty/Specialty";
import SpecialtyRepository from "../repository/SpecialtyRepository";


export default class specialtyService{

    async create(specialtyDto: SpecialtyDto){
        return SpecialtyRepository.createSpecialty(specialtyDto);
    }

    async getAll(){
        return SpecialtyRepository.getAllSpecialties();
    }
}