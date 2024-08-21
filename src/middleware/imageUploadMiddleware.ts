// middlewares/imageUploadMiddleware.ts
import { Request, Response, NextFunction } from "express";
import { uploadSingle } from "./multerConfig"; // Importa el middleware de multer
import { uploadImageToAzure, deleteImageFromAzure } from "../helpers/azureBlobService";
import { ValidationChain, validationResult } from 'express-validator';

const imageUploadMiddleware = (validators?: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        uploadSingle(req, res, async (err) => {
            try {
                if (err) {
                    return res.status(400).json({ error: 'Error subiendo el archivo: ' + err.message });
                }

                if (validators) {
                    await Promise.all(validators.map(validator => validator.run(req)));

                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        return res.status(400).json({ errors: errors.array() });
                    }
                }

                if (req.file) {
                    if (req.body.url) {
                        await deleteImageFromAzure(req.body.url);
                        delete req.body.url;
                    }
                    const imageUrl = await uploadImageToAzure(req.file);
                    req.body.fotoUrl = imageUrl;
                } else {
                    return res.status(404).json({ message: 'Imagen requerida' });
                }
                next();
            } catch (uploadError) {
                return res.status(500).json({ error: 'Error subiendo a Azure' });
            }
        });
    }
}

export default imageUploadMiddleware;
