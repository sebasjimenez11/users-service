import { Request, Response } from "express";
import patientService from "../service/patientService";
import PatientDto from "../dto/Patient";


export default class PatientContorller {
    static async register(req: Request, res: Response){
        const {
            documentoPac,
            tipoDoc,
            nombre,
            apellido,
            email,
            password,
            fechaNac,
            rol,
        } = req.body;

        const register = await patientService.registerPatient(new PatientDto(documentoPac, tipoDoc, nombre, apellido, email, password, fechaNac, rol));

        if(register.register){
            res.status(200).json({
                register : register.status
            });
        } else {
            res.status(500).json({
                register : register.status
            });
        }
        
    }
}