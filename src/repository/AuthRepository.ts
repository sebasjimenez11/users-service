import db from "../config/configBd"
import AuhtDto from "../dto/auht/Auht";
import bcrypt from 'bcryptjs';

export default class AuhtRepository {
        async login (auht:AuhtDto){
            try {
                const result: any = await db.execute('SELECT Id, Email, Password, user_type FROM all_users WHERE Email = ? OR Documento = ? AND user_type = ?',[auht.email,auht.document, auht.rol]);
                if (result[0].length > 0) { 
                    const userRow = result[0]; 
                    const isPasswordValid = await bcrypt.compare(auht.password, userRow[0].Password);
                    if (isPasswordValid){
                        return {
                            logged: true, 
                            message: "Successful authentication",
                            ID: userRow[0].Id,
                            rol: userRow[0].user_type,
                            email : userRow[0].Email
                        }
                    }
                return {logged: false, message: "Invalid user or password" };
                } 
                return {logged: false, message: "Invalid user or password" };
            } catch (error) {
                    console.log(error);
                    return {logged: false, message: error.message };
            }  
    }

    async recoveryPassword (email : string){
        try {
            const result: any = await db.execute('SELECT Id, Email, Password, user_type FROM all_users WHERE Email = ?',[email]);
            if (result[0].length > 0) { 
                const userRow = result[0]; 
                    return {
                        recovery: true, 
                        message: "Successful authentication",
                        ID: userRow[0].Id,
                        rol: userRow[0].user_type,
                        email : userRow[0].Email
                    }
                }
            return {logged: false, message: "Invalid user" };
        } catch (error) {
                console.log(error);
                return {logged: false, message: error.message };
        }  
    }
}