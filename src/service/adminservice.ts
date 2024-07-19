import AdminUpdateDTO from "../dto/admin/AdminUpdate";
import AdminRepository from "../repository/AdminRepository";

export default class AdminService {
    async getByEmailAdmin(email: string){
        return await AdminRepository.getByEmailAdmin(email);
    }

    async updateProfileAdmin(admin:AdminUpdateDTO){
        return await AdminRepository.updateProfileAdmin(admin);
    }
}