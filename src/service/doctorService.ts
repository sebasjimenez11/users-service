import DoctorDto from "../dto/doctor/Doctor";
import DoctorUpdateDto from "../dto/doctor/DoctorUpdate";
import doctorRepository from "../repository/DoctorRepository";

export default class DoctorService {
    async registerDoctor(doctor: DoctorDto) {
        return await doctorRepository.registerDoctor(doctor);
    }

    async getAllDoctors() {
        return await doctorRepository.getAllDoctors();
    }

    async getDoctorByEmail(email: string) {
        return await doctorRepository.getDoctorByEmail(email);
    }

    async getDoctorCatalog () {
        return await doctorRepository.getDoctorCatalog();
    }

    async updateProfileDoctor(doctor:DoctorUpdateDto){
        return await doctorRepository.updateProfileDoctor(doctor);
    }
}
