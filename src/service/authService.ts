import AuhtRepository from "../repository/AuthRepository";
import AuhtDto from "../dto/auht/Auht";
import generateToken from "../helpers/generateToken";
import azuereShippingEmail from "../helpers/shippingEmail";
import creationEmail from "../helpers/creationEmail";

export default class AuthService {
    private repository = new AuhtRepository();
    async login(auht:AuhtDto){
        const login = await this.repository.login(auht);
        if (login?.logged) {
            return {
                logged: login.logged,
                message: login?.message,
                token : generateToken({ID : login?.ID,rol : login?.rol, email: login.email},process.env.JWT_SECRET,60)
            }}else{
                return {message: login?.message, logged: login?.logged}
            }
    }

    async recoveryPassword(email : string){
        const recovery = await this.repository.recoveryPassword(email);
        if (recovery.recovery) {
            azuereShippingEmail(
                creationEmail(
                    'passwordRecovery',
                recovery.email,
                generateToken({ID : recovery?.ID,rol : recovery?.rol, email: recovery.email},process.env.JWT_SECRET,60)
            )
        )
            return {
                recovery: recovery.recovery,
                message: recovery?.message
            }}else{
                return {message: recovery?.message, recovery: recovery?.logged}
            }
    }
}
