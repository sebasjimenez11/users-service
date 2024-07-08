import { Request,Response } from "express";

export default class DoctorController {

    static async register(req:Request,res:Response){
        res.status(200).json({
            message: "hola"
        })
    }
}