import AuhtRepository from "../repository/AuthRepository";
import AuhtDto from "../dto/Auht";
import generateToken from "../helpers/generateToken";

export default class AuhtService {
    
    static async auht(auht:AuhtDto){
        try{
            const login = await AuhtRepository.login(auht);
            const data = {
                email : login?.email,
                rol : login?.rol
            }
            console.log(login);
            
            if (login.logged) {
                return {
                    logged: login.logged,
                    message: login?.message,
                    token : generateToken(data,process.env.JWT_SECRET,60)
                }
            }else{
                return {message: login?.message, logged: login.logged}
            }
        } catch (error) {
            console.log(error);
        }
    }
}
