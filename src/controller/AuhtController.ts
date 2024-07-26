import { Request, Response } from "express";
import AuhtDto from "../dto/auht/Auht";
import AuhtService from "../service/authService";
import responseHandler from "../helpers/responseHandler";
import StatusCodes  from "../common/constants/statusCode";

const controller = async (req: Request, res: Response) => {
    try {
        const { password, document, email } = req.body;
        const login = await new AuhtService().auht(new AuhtDto(password, document, email));

        if (login.logged) {
            responseHandler(res, StatusCodes.OK, login.message, { token: login.token });
        } else {
            responseHandler(res, StatusCodes.NOT_FOUND, login.message);
        }
    } catch (error) {
        console.error(error);
        responseHandler(res, StatusCodes.INTERNAL_SERVER_ERROR, 'Internal Server Error');
    }
}

export default controller;
