import { Request, Response } from "express";
import AuthService from "../service/authService"; // Corregido el nombre del archivo y la clase
import AuthDto from '../dto/auht/Auht';

export default class AuthController { 
    private service = new AuthService();
    
    login = async (req: Request, res: Response) => {
        try {
            const { password, profile, document, email } = req.body;
            const authDto = new AuthDto(password, profile, document, email);
            const login = await this.service.login(authDto);

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
            res.status(500).json({
                message: 'Internal Server Error',
                error: error.message
            });
        }
    }
    

    recoveryPassword = async (req: Request, res: Response)=>{
        try {
            const email = req.body.email ;
            const recovery = await this.service.recoveryPassword(email);
            if (recovery.recovery) {
                res.status(200).json({message: recovery.message})
            } else {
                res.status(403).json({message: recovery.message})
            }
        } catch (error) {
            res.status(505).json({message : error.message})
        }
    }

}
