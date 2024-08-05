import { Request, Response } from "express";
import patientService from "../service/patientService";
import PatientDto from "../dto/patient/Patient";
import PatientUpdateDto from "../dto/patient/PatientUpdate";

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
                data: getAllPatients.data
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
        const getPatient = await service.getPacienteByEmail(req.body.email);

        if (getPatient.data) {
            res.status(200).json({
                message: 'Patient retrieved successfully',
                data: getPatient.data
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
        const { ID, documentoPac, tipoDoc, nombre, apellido, email, fechaNac, telefono, direccion } = req.body;
        const update = await service.updateProfilePatient(new PatientUpdateDto(ID, documentoPac, tipoDoc, nombre, apellido, email, fechaNac, telefono, direccion));

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
