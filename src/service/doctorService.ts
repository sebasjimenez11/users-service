import DoctorDto from "../dto/doctor/Doctor";
import DoctorUpdateDto from "../dto/doctor/DoctorUpdate";
import doctorRepository from "../repository/DoctorRepository";
import generateHash from "../helpers/generateHash";
import generateUniqueId from "../helpers/generateUniqueId";

export default class DoctorService {
    async registerDoctor(doctor: DoctorDto) {
        doctor.ID = generateUniqueId();
        doctor.password = await generateHash(doctor.password);
        return await doctorRepository.registerDoctor(doctor);
    }

    async getAllDoctors() {
        return await doctorRepository.getAllDoctors();
    }

    async getDoctorById(email: string) {
        return await doctorRepository.getDoctorById(email);
    }

    async getDoctorCatalog() {
        return await doctorRepository.getDoctorCatalog();
    }

    async updateProfileDoctor(doctor:DoctorUpdateDto){
        return await doctorRepository.updateProfileDoctor(doctor);
    }

    async UpdateDoctorProfilePic(ID:string, fotoUrl:string){
        return await doctorRepository.UpdateDoctorProfilePic(ID, fotoUrl);
    }
}
