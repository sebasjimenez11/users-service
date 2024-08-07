import db from "../config/configBd"
import AuhtDto from "../dto/auht/Auht";
import bcrypt from 'bcryptjs';

export default class AuhtRepository {
        static async login (auht:AuhtDto){
            try {
                const result: any = await db.execute('SELECT Id, Email, Password, user_type FROM all_users WHERE Email = ? OR Documento = ? LIMIT 1',[auht.email,auht.document]);
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
                return {logged: false, message: "Invalid username or password" };
                } 
                return {logged: false, message: "Invalid username or password" };
            } catch (error) {
                    console.log(error);
                    return {logged: false, message: error.message };
            }  
    }
}