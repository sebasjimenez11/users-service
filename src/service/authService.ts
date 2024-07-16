import AuhtRepository from "../repository/AuthRepository";
import AuhtDto from "../dto/Auht";
import generateToken from "../helpers/generateToken";

export default class AuhtService {
    async auht(auht:AuhtDto){
    
        const login = await AuhtRepository.login(auht);
        if (login?.logged) {
            return {
                logged: login.logged,
                message: login?.message,
                token : generateToken({email : login?.email,rol : login?.rol},process.env.JWT_SECRET,60)
            }}else{
                return {message: login?.message, logged: login?.logged}
            }
    }
}
