import PatientDto from "../dto/patient/Patient";
import PatientRepository from "../repository/PatientRepository";
import PatientUpdateDto from "../dto/patient/PatientUpdate";
import generateUniqueId from "../helpers/generateUniqueId";
import generateHash from "../helpers/generateHash";
import azuereShippingEmail from "../helpers/shippingEmail";
import creationEmail from "../helpers/creationEmail";

export default class patientService {

    async registerPatient(patient: PatientDto) {
        try {
            patient.ID = generateUniqueId();
            patient.password = await generateHash(patient.password);
            const repository = await PatientRepository.Register(patient);
        if (repository.register) {
                azuereShippingEmail(creationEmail('welcome',repository.email));
                return repository;
            } return repository
        } catch (error) {
            console.error('Error al registrar un paciente:', error.message);
            throw new Error('Error al registrar un paciente:');
        }
    }

    async getAllPatients() {
        return await PatientRepository.getAllPatients();
    }

    async getPacienteByEmail(ID:string) {
        return await PatientRepository.getPacienteByEmail(ID);
    }

    async updateProfilePatient(patient: PatientUpdateDto){
        try {
            const update = await PatientRepository.updateProfilePatient(patient);
            if (update.update) {
                azuereShippingEmail(creationEmail('',patient.email));
                return update;
            } return update;
        } catch (error) {
            
        }
    }

    async UpdatePatientProfilePic(ID:string, fotoUrl:string){
        return await PatientRepository.UpdatePatientProfilePic(ID, fotoUrl);
    }
}