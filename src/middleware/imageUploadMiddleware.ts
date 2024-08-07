import { Request, Response, NextFunction } from "express";
import multer from "multer";
import { uploadImageToAzure } from "../helpers/azureBlobService";

// Configuración de multer para almacenar archivos en memoria y validar el tipo de archivo
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Check if file is an image
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Only image files are allowed!") as any, false);
        }
    }
});

const imageUploadMiddleware = (req: Request, res: Response, next: NextFunction) => {
    upload.single('fotoUrl')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        try {
            const imageUrl = await uploadImageToAzure(req.file);
            req.body.fotoUrl = imageUrl;
            next();
        } catch (uploadError) {
            return res.status(500).json({ error: 'Error uploading to Azure' });
        }
    });
};

export default imageUploadMiddleware;
