import PatientDto from "../dto/patient/Patient";
import PatientRepository from "../repository/PatientRepository";
import PatientUpdateDto from "../dto/patient/PatientUpdate";
import generateUniqueId from "../helpers/generateUniqueId";
import generateHash from "../helpers/generateHash";

export default class patientService {

    async registerPatient(patient: PatientDto) {
        patient.ID = generateUniqueId();
        patient.password = await generateHash(patient.password);
        return await PatientRepository.Register(patient);
    }

    async getAllPatients() {
        return await PatientRepository.getAllPatients();
    }

    async getPacienteByEmail(ID:string) {
        return await PatientRepository.getPacienteByEmail(ID);
    }

    async updateProfilePatient(patient: PatientUpdateDto){
        return await PatientRepository.updateProfilePatient(patient);
    }

    async UpdatePatientProfilePic(ID:string, fotoUrl:string){
        return await PatientRepository.UpdatePatientProfilePic(ID, fotoUrl);
    }
}