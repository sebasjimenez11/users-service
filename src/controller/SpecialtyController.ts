import { Request,Response } from "express";
import specialtyService from "../service/specialtyService";
import SpecialtyDto from "../dto/specialty/Specialty";

const service = new specialtyService();
const controllerRegister = async (req:Request,res:Response) => {
    try {
        const {codigoEspc, nombre, descripcion} = req.body;

        const create = await service.create(new SpecialtyDto(codigoEspc, nombre, descripcion));
        if(create.success){
            return res.status(202).json({message:create.message});
        }res.status(404).json({message:create.message}); 
    } catch (error) {
         console.log(error);
         res.status(500).json({message: error.message});
    }
    
}

const controllerGetAllSpecialty = async (req:Request,res:Response):Promise<void> => {
    try{
        const getAll = await service.getAll();
        res.status(202).json({specialty: getAll.data});
    }catch(error){
        res.status(404).json({message:error.message})
    }
}



export {controllerRegister,controllerGetAllSpecialty};
