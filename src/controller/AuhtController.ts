import { Request, Response } from "express";
import AuhtDto from "../dto/Auht";
import AuhtService from "../service/AuthService";

const controller = async (req:Request,res:Response)=>{
            try {
                const {
                    password,
                    document,
                    email
                } = req.body
            
                const login = await new AuhtService().auht(new AuhtDto(password,document,email));
                
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

export default controller;
