import { Request, Response, NextFunction } from "express";
import multer from "multer";
import {uploadImageToAzure} from "../helpers/azureBlobService";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const imageUploadMiddleware = (req:Request, res:Response, next:NextFunction) => {
    upload.single('fotoUrl')(req,res, async(err)=>{
        if(err){
            return res.status(400).json({ error: 'Error uploading file' });
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
    })
}

export default imageUploadMiddleware 