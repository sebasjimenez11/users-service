import { Request, Response } from "express";
import patientService from "../service/patientService";
import PatientDto from "../dto/patient/Patient";
import PatientUpdateDto from "../dto/patient/PatientUpdate";

const service = new patientService()
export const registerPatientController = async (req:Request,res:Response)=>{
    try {
        const { documentoPac, tipoDoc, nombre, apellido, email, password, fechaNac, rol,
        } = req.body;
        
        const register = await service.registerPatient(new PatientDto(documentoPac, tipoDoc, nombre, apellido, email, password, fechaNac, rol));
    
        if(register.register){
           return res.status(200).json({status: register.status});
        }  res.status(404).json({status : register.status});
    
    } catch (error) {
        res.status(500).json({status: error})
    }
};

export const getAllPatientsController = async (req:Request,res:Response) => {
    try{
        const getAllPatients = await service.getAllPatients();
        res.status(202).json({patients: getAllPatients.data});
    }catch(error){
        res.status(505).json({message:error.message})
    }
}

export const getPatientByEmailController = async (req:Request,res:Response)=> {
    try{
        const getAllPatients = await service.getPatientByEmail(req.body.tokenEmail);
        res.status(202).json({patients: getAllPatients.data});
    }catch(error){
        res.status(505).json({message:error.message})
    }
}

export const updateProfilePatientController = async (req:Request,res:Response) => { 
    try {
        const { tokenEmail, documentoPac, tipoDoc, nombre, apellido, email, fechaNac, telefono,direccion
        } = req.body;
        
        const update = await service.updateProfilePatient(new PatientUpdateDto(tokenEmail,documentoPac,tipoDoc,nombre,apellido,email,fechaNac,telefono,direccion))
    
        if(update.update){
           return res.status(200).json({status: update.status});
        }  res.status(404).json({status : update.status});
    
    } catch (error) {
        res.status(500).json({status: error})
    }
}
