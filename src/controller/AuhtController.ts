import { Request, Response } from "express";
import AuhtDto from "../dto/auht/Auht";
import AuhtService from "../service/authService";


const controller = async (req: Request, res: Response) => {
    try {
        const { password, profile, document, email } = req.body;
        const login = await new AuhtService().auht(new AuhtDto(password, profile, document, email));
        if (login.logged) {
            res.status(202).json({
                message: login.message, 
                token: login.token
            });
        } else {
            res.status(404).json({ message: login.message });
        }     
    } catch (error) {
        console.error(error);
        res.status(505).json({
            Message : 'Internal Server Error'
        })
    }
}

export default controller;
