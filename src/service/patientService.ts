import PatientDto from "../dto/Patient";
import PatientRepository from "../repository/PatientRepository";

export default class patientService {
    async registerPatient(patient: PatientDto) {
        return await PatientRepository.Register(patient);
    }

    async getPatientById() {}

    async getAllPatients() {}

    async updatePatientDetails() {}

    async changePatientPassword() {}

    async deactivatePatient() {}
}