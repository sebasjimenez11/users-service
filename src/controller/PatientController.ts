import { Request, Response } from "express";
import patientService from "../service/patientService";
import PatientDto from "../dto/patient/Patient";
import PatientUpdateDto from "../dto/patient/PatientUpdate";
import creationEmail from "../helpers/creationEmail"
import azuereShippingEmail from "../helpers/shippingEmail";

const service = new patientService();

export const registerPatientController = async (req: Request, res: Response) => {
    try {
        const { documentoPac, tipoDoc, nombre, apellido, email, password, fechaNac, rol } = req.body;
        const register = await service.registerPatient(new PatientDto(documentoPac, tipoDoc, nombre, apellido, email, password, fechaNac, rol));

        if (register.register) { 
            res.status(202).json({ message: register.status });
        } else {
            res.status(404).json({ message: register.status });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getAllPatientsController = async (req: Request, res: Response) => {
    try {
        const getAllPatients = await service.getAllPatients();
        
        if (getAllPatients.data) {
            res.status(200).json({
                message: 'Patients retrieved successfully',
                patients: getAllPatients.data
            });
        } else {
            res.status(204).json({ message: 'No patients found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const getPatientByEmailController = async (req: Request, res: Response) => {
    try {
        const getPatient = await service.getPacienteByEmail(req.body.ID);

        if (getPatient.data) {
            res.status(200).json({
                message: 'Patient retrieved successfully',
                patient: getPatient.data
            });
        } else {
            res.status(404).json({ message: 'Patient not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const updateProfilePatientController = async (req: Request, res: Response) => {
    try {
        const { Id, documentoPac, tipoDoc, nombre, apellido, email, fechaNac, telefono, direccion } = req.body;
        const update = await service.updateProfilePatient(new PatientUpdateDto(Id, documentoPac, tipoDoc, nombre, apellido, email, fechaNac, telefono, direccion));

        if (update.update) {
            res.status(200).json({ message: update.status });
        } else {
            res.status(404).json({ message: update.status });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const UpdatePatientProfilePicController = async (req: Request, res: Response) => { 
    try {
        const {ID,fotoUrl} = req.body
        const updatePatientProfile = await service.UpdatePatientProfilePic(ID,fotoUrl);

        if (updatePatientProfile.update) {
            res.status(202).json({
                message: updatePatientProfile.status, 
            })
        } else {
            res.status(404).json({
                message : updatePatientProfile.status
            })  
        }
    } catch (error) {
        res.status(505).json({message: "Error interno en el servidor"})
    }
}

