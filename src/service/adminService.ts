import AdminUpdateDTO from "../dto/admin/AdminUpdate";
import AdminRepository from "../repository/AdminRepository";

export default class AdminService {
    async getAdminById(ID: string){
        return await AdminRepository.getAdminById(ID);
    }

    async updateProfileAdmin(admin:AdminUpdateDTO){
        return await AdminRepository.updateProfileAdmin(admin);
    }

    async updateProfileAdminPic(ID: string, fotoUrl:string){
        return await AdminRepository.updateAdminProfilePic(ID, fotoUrl);
    }
}