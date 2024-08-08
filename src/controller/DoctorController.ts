import { Request, Response } from "express";
import doctorDto from "../dto/doctor/Doctor";
import doctorService from "../service/doctorService";
import DoctorUpdateDto from "../dto/doctor/DoctorUpdate";

const service = new doctorService();

export const registerDoctorController = async (req: Request, res: Response) => {
    try {
        const { tarjetaProf, documento, nombre, apellido, rol, email, fotoUrl, password, valorCita, codigoEspc } = req.body;
        const registerService = await service.registerDoctor(new doctorDto(tarjetaProf, documento, nombre, apellido, rol, email, fotoUrl, password, valorCita, codigoEspc));
        
        if (registerService.register) {
            res.status(202).json({message : registerService.status,})
        } else {
            res.status(404).json({message : registerService.status})
        }
    } catch (error) {
        console.log(error);
        res.status(505).json({ message : "Error interno en el servidor"});
    }
}

export const getAllDoctorsController = async (req: Request, res: Response) => {
    try {
        const getAllDoctors = await service.getAllDoctors();

        if (getAllDoctors.data) {
            res.status(200).json({
                message : getAllDoctors.message,
                doctors : getAllDoctors.data
            })
        } else {
            res.status(400).json({message: getAllDoctors.message})
        }

    } catch (error) {
        console.log(error);
        res.status(505).json({ message : "Error interno en el servidor"});
    }
}

export const getDoctorByIdController = async (req: Request, res: Response) => {
    try {
        const getByIdDoctor = await service.getDoctorById(req.body.ID);
        res.status(200).json({doctor : getByIdDoctor.doctor});
    } catch (error) {
        console.log(error);
        res.status(505).json({ message : "Error interno en el servidor"});
    }
}

export const getDoctorCatalogController = async (req: Request, res: Response) => {
    try {
        const getDoctorCatalog = await service.getDoctorCatalog();
        res.status(200).json({doctors : getDoctorCatalog.data})
    } catch (error) {
        console.log(error);
        res.status(505).json({ message : "Error interno en el servidor"});
    }
}

export const updateProfileDoctorContoller = async (req: Request, res: Response) => {
    try {
        const { ID, tarjetaProf, documento, nombre, apellido, email, valorCita } = req.body;
        const updateProfile = await service.updateProfileDoctor(new DoctorUpdateDto(ID, tarjetaProf, documento, nombre, apellido, email, valorCita));
        
        if (updateProfile.update) {
            res.status(200).json({message: updateProfile.status})
        } else {
            res.status(400).json({message: updateProfile.status});
        }
    } catch (error) {
        console.log(error);
        res.status(505).json({ message : "Error interno en el servidor"});
    }
}

export const UpdateDoctorProfilePicController = async (req: Request, res: Response) => { 
    try {
        const {ID,fotoUrl} = req.body
        const updateDoctorProfile = await service.UpdateDoctorProfilePic(ID,fotoUrl);

        if (updateDoctorProfile.update) {
            res.status(202).json({
                message: updateDoctorProfile.status
            })
        } else {
            res.status(404).json({
                message : updateDoctorProfile.status
            })  
        }
    } catch (error) {
        res.status(505).json({message: "Error interno en el servidor"})
    }
}
