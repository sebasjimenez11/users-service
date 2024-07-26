import { Request, Response } from "express";
import patientService from "../service/patientService";
import PatientDto from "../dto/patient/Patient";
import PatientUpdateDto from "../dto/patient/PatientUpdate";
import responseHandler from "../helpers/responseHandler";
import StatusCodes  from "../common/constants/statusCode";

const service = new patientService();

export const registerPatientController = async (req: Request, res: Response) => {
    try {
        const { documentoPac, tipoDoc, nombre, apellido, email, password, fechaNac, rol } = req.body;
        const register = await service.registerPatient(new PatientDto(documentoPac, tipoDoc, nombre, apellido, email, password, fechaNac, rol));

        if (register.register) {
            responseHandler(res, StatusCodes.OK, register.status);
        } else {
            responseHandler(res, StatusCodes.NOT_FOUND, register.status);
        }
    } catch (error) {
        responseHandler(res, StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
};

export const getAllPatientsController = async (req: Request, res: Response) => {
    try {
        const getAllPatients = await service.getAllPatients();
        responseHandler(res, StatusCodes.ACCEPTED, 'Patients retrieved successfully', getAllPatients.data);
    } catch (error) {
        responseHandler(res, StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
}

export const getPatientByEmailController = async (req: Request, res: Response) => {
    try {
        const getAllPatients = await service.getPatientByEmail(req.body.tokenEmail);
        responseHandler(res, StatusCodes.ACCEPTED, 'Patient retrieved successfully', getAllPatients.data);
    } catch (error) {
        responseHandler(res, StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
}

export const updateProfilePatientController = async (req: Request, res: Response) => {
    try {
        const { tokenEmail, documentoPac, tipoDoc, nombre, apellido, email, fechaNac, telefono, direccion } = req.body;
        const update = await service.updateProfilePatient(new PatientUpdateDto(tokenEmail, documentoPac, tipoDoc, nombre, apellido, email, fechaNac, telefono, direccion));

        if (update.update) {
            responseHandler(res, StatusCodes.OK, update.status);
        } else {
            responseHandler(res, StatusCodes.NOT_FOUND, update.status);
        }
    } catch (error) {
        responseHandler(res, StatusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
}
