// middlewares/multerConfig.ts
import multer from 'multer';
import path from 'path';

// Configuración de almacenamiento en memoria para multer
const storage = multer.memoryStorage();

// Configuración de multer con validación de tipo de archivo
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

// Exporta el middleware de multer configurado
export const uploadSingle = upload.single('fotoUrl');
