import { Request, Response } from "express";
import patientService from "../service/patientService";
import PatientDto from "../dto/Patient";

const service = new patientService()
const registerPatientController = async (req:Request,res:Response)=>{
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

const getAllPatientsController = async (req:Request,res:Response) => {
    try{
        res.status(202).json({});
    }catch(error){
        res.status(505).json({message:error.message})
    }
}

const getPatientByEmailController = async (req:Request,res:Response)=> {
    try{

    }catch(error){}
}

export {registerPatientController,getAllPatientsController,getPatientByEmailController}
