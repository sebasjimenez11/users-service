import { Request, Response } from "express";
import AuhtDto from "../dto/Auht";
import AuhtService from "../service/AuthService";

export default class AuhtContorller {
    
    
    async Auht(req:Request,res:Response){
        try {
            const authDto = new AuhtDto(req.body.password);
            authDto.document = req.body.document;
            authDto.email = req.body.email;
    
            const login = await AuhtService.auht(authDto);
            
            if (login.logged) {
                return res.status(200).json({status: login.message,token: login.token});
            }else{
                return res.status(404).json({status : login.message})
            }  
        }catch (error) {
            console.error(error);
            return res.status(500).json({ status: 'Internal Server Error' });
        }
            
    } 
         
}
