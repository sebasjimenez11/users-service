import DoctorDto from "../dto/Doctor";
import doctorRepository from "../repository/DoctorRepository";

export default class DoctorService {
    async registerDoctor(doctor: DoctorDto) {
        return await doctorRepository.registerDoctor(doctor);
    }

    async getAllDoctors() {
        return await doctorRepository.getAllDoctors();
    }

    async getDoctorById(id: string) {
        return await doctorRepository.getDoctorById(id);
    }

    async getDoctorCatalog () {
        return await doctorRepository.getDoctorCatalog();
    }
}
