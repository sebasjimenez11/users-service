import { Response } from 'express';

const responseHandler = (res: Response, statusCode: number, message: string, data: any = null) => {
    res.status(statusCode).json({
        status: statusCode,
        message,
        data,
    });
};

export default responseHandler;
