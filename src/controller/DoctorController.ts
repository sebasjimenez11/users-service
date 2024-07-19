import { Request, Response } from "express";
import doctorDto from "../dto/doctor/Doctor";
import doctorService from "../service/doctorService";
import DoctorUpdateDto from "../dto/doctor/DoctorUpdate";

const service = new doctorService();

export const registerDoctorController = async (req: Request, res: Response) => {
    try {
        const { tarjetaProf, documento, nombre, apellido, rol, email, foto, password, valorCita ,codigoEspc } = req.body;
        const registerService = await service.registerDoctor(new doctorDto(tarjetaProf, documento, nombre, apellido, rol, email, foto, password, valorCita, codigoEspc));
        
        if (registerService.register) {
            return res.status(202).json({ status: registerService.status });
        } res.status(404).json({ status: registerService.status });
    } catch (error) {
        res.status(500).json({ status: "Error interno en el servidor" });
    }
}

export const getAllDoctorsController = async (req: Request, res: Response) => {
    try {
        const getAllDoctors = await service.getAllDoctors();
        return res.status(202).json({ message: getAllDoctors.message, doctors: getAllDoctors.data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getDoctorByEmailController = async (req: Request, res: Response) => {
    try {
        const emailDoctor = req.body.tokenEmail;
        const getByIdDoctor = await service.getDoctorByEmail(emailDoctor);
        res.status(202).json({ message: getByIdDoctor.message, doctor: getByIdDoctor.doctor });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getDoctorCatalogController = async (req: Request, res: Response) => {
   try {
        const getDoctorCatalog = await service.getDoctorCatalog();
        res.status(202).json({ message: getDoctorCatalog.message, catalog: getDoctorCatalog.data });
   } catch (error) {
        res.status(500).json({ message: error.message });
   }
}

export const updateProfileDoctorContoller = async (req:Request,res:Response)=> {
    try {
        const {tokenEmail,tarjetaProf,documento,nombre,apellido,email,valorCita} = req.body
        const updateProfile = await service.updateProfileDoctor(new DoctorUpdateDto(tokenEmail,tarjetaProf,documento,nombre,apellido,email,valorCita));
        if (updateProfile.update) {
           return res.status(202).json({message:updateProfile.status})
        } res.status(401).json({message:updateProfile.status})
        
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
}
