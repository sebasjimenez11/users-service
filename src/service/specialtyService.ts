import SpecialtyDto from "../dto/Specialty";
import SpecialtyRepository from "../repository/specialtyRepository";


export default class specialtyService{

    async create(specialtyDto: SpecialtyDto){
        return SpecialtyRepository.createSpecialty(specialtyDto);
    }

    async getAll(){
        return SpecialtyRepository.getAllSpecialties();
    }
}