import DoctorDto from "../dto/Doctor";
import doctorRepository from "../repository/DoctorRepository";

export default class DoctorService {
    async register(doctor:DoctorDto){
        return await doctorRepository.register(doctor);
    }

}