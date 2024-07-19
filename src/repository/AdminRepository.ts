import db from '../config/configBd';
import AdminUpdateDTO from '../dto/admin/AdminUpdate';

export default class AdminRepository {
    static async updateProfileAdmin(admin: AdminUpdateDTO) {
        try {
            await db.execute("CALL UpdateAdmin(?,?,?,?)", [
                admin.documento, 
                admin.nombre, 
                admin.apellido, 
                admin.email
            ]);
            return { update: true, message: "Admin profile updated successfully" };
        } catch (error) {
            console.error('Error updating admin profile:', error);
            return { update: false, message: 'Failed to update admin profile: ' + error.message, data: error };
        }
    }

    static async getByEmailAdmin(email: string) {
        try {
            const [rows] = await db.execute('CALL GetAdminByEmail(?)', [email]);
            return { message: 'Admin retrieved successfully', admin: rows[0][0] };
        } catch (error) {
            console.error('Error retrieving admin:', error);
            return { message: 'Failed to retrieve admin: ' + error.message };
        }
    }
}
