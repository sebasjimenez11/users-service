import { Request, Response, NextFunction } from "express";
import multer from "multer";
import { uploadImageToAzure, deleteImageFromAzure } from "../helpers/azureBlobService";
import path from 'path';

// Configuración de multer para almacenar archivos en memoria y validar el tipo de archivo
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error("Solo se permiten imágenes"));
        }
    }
});

const imageUploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Almacenar datos del body antes de que multer procese el archivo
    const bodyData = { ...req.body };

    upload.single('fotoUrl')(req, res, async (err) => {
        try {
            if (err) {
                return res.status(400).json({ error: 'Error subiendo el archivo: ' + err.message });
            }
            // Restaurar datos del body
            req.body = { ...bodyData, ...req.body };
            
            if (req.file) {
                // Si hay un archivo nuevo y una URL existente, eliminar la imagen existente
                if (req.body.url) {
                    await deleteImageFromAzure(req.body.url);
                    delete req.body.url;
                }
                // Subir la nueva imagen
                const imageUrl = await uploadImageToAzure(req.file);
                req.body.fotoUrl = imageUrl;
            } else {
                // Si no se ha cargado un archivo, devolver un error
                return res.status(404).json({ message: 'Imagen requerida' });
            }
            next();
        } catch (uploadError) {
            return res.status(500).json({ error: 'Error subiendo a Azure' });
        }
    });
};

export default imageUploadMiddleware;
