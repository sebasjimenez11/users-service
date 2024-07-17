import PatientDto from "../dto/Patient";
import PatientRepository from "../repository/PatientRepository";

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
}