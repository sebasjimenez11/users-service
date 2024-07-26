import { Request, Response } from "express";
import specialtyService from "../service/specialtyService";
import SpecialtyDto from "../dto/specialty/Specialty";
import responseHandler from "../helpers/responseHandler";
import statusCodes from "../common/constants/statusCode";

const service = new specialtyService();

const controllerRegister = async (req: Request, res: Response) => {
    try {
        const { Codigo_Espc, Nombre, Descripcion } = req.body;
        const create = await service.create(new SpecialtyDto(Codigo_Espc, Nombre, Descripcion));
        
        if (create.success) {
            return responseHandler(res, statusCodes.ACCEPTED, create.message);
        }
        responseHandler(res, statusCodes.NOT_FOUND, create.message);
    } catch (error) {
        console.log(error);
        responseHandler(res, statusCodes.INTERNAL_SERVER_ERROR, error.message);
    }
};

const controllerGetAllSpecialty = async (req: Request, res: Response): Promise<void> => {
    try {
        const getAll = await service.getAll();
        responseHandler(res, statusCodes.ACCEPTED, "Especialidades obtenidas con éxito", getAll.data);
    } catch (error) {
        responseHandler(res, statusCodes.NOT_FOUND, error.message);
    }
};

export { controllerRegister, controllerGetAllSpecialty };
