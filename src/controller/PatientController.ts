import { Request, Response } from "express";
import patientService from "../service/patientService";
import PatientDto from "../dto/Patient";

const service = new patientService()
const controller = async (req:Request,res:Response)=>{
    try {
        const { documentoPac, tipoDoc, nombre, apellido, email, password, fechaNac, rol,
        } = req.body;
        
        const register = await service.registerPatient(new PatientDto(documentoPac, tipoDoc, nombre, apellido, email, password, fechaNac, rol));
    
        if(register.register){
            res.status(200).json({status: register.status});
        } else {
            res.status(404).json({status : register.status});
        } 
    } catch (error) {
        res.status(500).json({status: error})
    }
};

export default controller;
