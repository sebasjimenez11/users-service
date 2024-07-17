import PatientDto from "../dto/patient/Patient";
import PatientRepository from "../repository/PatientRepository";
import PatientUpdateDto from "../dto/patient/PatientUpdate";

export default class patientService {

    async registerPatient(patient: PatientDto) {
        return await PatientRepository.Register(patient);
    }

    async getAllPatients() {
        return await PatientRepository.getAllPatients();
    }

    async getPatientByEmail(email:string) {
        return await PatientRepository.getPatientByEmail(email);
    }

    async updateProfilePatient(patient: PatientUpdateDto){
        return await PatientRepository.updateProfilePatient(patient)
    }
}