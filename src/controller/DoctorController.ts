import { Request,Response } from "express";
import doctorDto from "../dto/Doctor";
import doctorService from "../service/doctorService";

const service = new doctorService();
const controller = async (req:Request,res:Response)=>{
    try{
        const {
            tarjetaProf,
            documento,
            nombre,
            apellido,
            rol,
            email,
            foto,
            password,
            codigoEspc
        } = req.body;
console.log(new doctorDto(tarjetaProf,documento,nombre,apellido,rol,email,foto,password,codigoEspc));

        const registerService = await service.register(new doctorDto(tarjetaProf,documento,nombre,apellido,rol,email,foto,password,codigoEspc));
        
        if(registerService.register){
            return res.status(202).json({status:registerService.status});
        }else{
            return res.status(404).json({status:registerService.status});
        }
    }catch{
        res.status(500).json({status: "Error interno en el servidor"});
    }
}

export default controller;