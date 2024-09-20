import { Request, Response } from "express";
import specialtyService from "../service/specialtyService";
import SpecialtyDto from "../dto/specialty/Specialty";

const service = new specialtyService();

const controllerRegister = async (req: Request, res: Response) => {
    try {
        const { Codigo_Espc, Nombre, Descripcion } = req.body;
        const create = await service.create(new SpecialtyDto(Codigo_Espc, Nombre, Descripcion));
        
        if (create.success) {
            return res.status(202).json({ message: create.message });
        }
        res.status(404).json({ message: create.message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const controllerGetAllSpecialty = async (req: Request, res: Response): Promise<void> => {
    try {
        const getAll = await service.getAll();
        res.status(202).json({
            message: "Especialidades obtenidas con éxito",
            specialty: getAll.data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const controllerUpdateSpecialty = async (req: Request, res: Response)=>{
    try {
        const codigoEspc = req.body.codigoEspc;
        const estado = req.body.estado;

        const updateStatus = await service.updateStatus(estado, codigoEspc);

        if (updateStatus.update) {
            res.status(202).json({
                message: updateStatus.message
            })
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export { controllerRegister, controllerGetAllSpecialty, controllerUpdateSpecialty};
