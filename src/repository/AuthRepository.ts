import db from "../config/configBd"
import AuhtDto from "../dto/Auht";
import bcrypt from 'bcryptjs';

export default class AuhtRepository {
        static async login (auht:AuhtDto){
            try {
                const sql = 'SELECT Email, Password, user_type FROM all_users WHERE Email = ? LIMIT 1';
                const values = [auht.email];
                const result: any = await db.query(sql,values);
                if (result[0].length > 0) { 
                    const userRow = result[0]; 
                    const isPasswordValid = await bcrypt.compare(auht.password, userRow[0].Password);
                    if (isPasswordValid){
                        return {
                        logged: true, 
                        message: "Successful authentication",
                        email: userRow[0].Email,
                        rol: userRow[0].user_type,
                    }
                        }
                return {logged: false, message: "Invalid username or password" };
                } 
                } catch (error) {
                    console.log(error);
                }  
    }
}