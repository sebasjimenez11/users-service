import PatientDto from "../dto/Patient";
import PatientRepository from "../repository/PatientRepository";

export default class patientService {
    static async registerPatient(patient: PatientDto) {
        return await PatientRepository.Register(patient);
    }

    static async getPatientById() {}

    static async getAllPatients() {}

    static async updatePatientDetails() {}

    static async changePatientPassword() {}

    static async deactivatePatient() {}
}