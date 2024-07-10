import { Request,Response } from "express";
import specialtyService from "../service/specialtyService";
import SpecialtyDto from "../dto/Specialty";

const service = new specialtyService();
const controller = async (req:Request,res:Response):Promise<void> => {
    try {
        const {codigoEspc, nombre, descripcion} = req.body;

        const create = await service.create(new SpecialtyDto(codigoEspc, nombre, descripcion));
        if(create.create){
            res.status(202).json({message:create.status});
        }else{
            res.status(404).json({message:create.status});
        }
        
    } catch (error) {
         console.log(error);
         res.status(500).json({message: error});
         
    }
    
}

export default controller;
