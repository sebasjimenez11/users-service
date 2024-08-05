// src/repository/AdminRepository.ts
import db from '../config/configBd';
import AdminUpdateDTO from '../dto/admin/AdminUpdate';

export default class AdminRepository {
    static async getAdminById(Id: string) {
        try {
            const [rows] = await db.execute('CALL GetAdminById(?)', [Id]);
            return { message: 'Admin retrieved successfully', admin: rows[0][0] };
        } catch (error) {
            console.error('Error retrieving admin:', error);
            return { message: 'Failed to retrieve admin: ' + error.message };
        }
    }

    static async updateProfileAdmin(admin: AdminUpdateDTO) {
        try {
            await db.execute("CALL UpdateAdmin(?,?,?,?,?)", [
                admin.ID,
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
}
