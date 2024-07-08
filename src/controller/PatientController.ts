import { Request, Response } from "express";

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

        
        
    }
}