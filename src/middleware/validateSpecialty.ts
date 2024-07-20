// src/validators/specialtyValidator.ts

import { body ,param} from 'express-validator';

export const specialtyValidator = () =>{
    return [
        body('Codigo_Espc')
            .notEmpty().withMessage('El código de especialidad es requerido')
            .isString().withMessage('El código de especialidad debe ser una cadena de caracteres'),
        body('Nombre')
            .notEmpty().withMessage('El nombre es requerido')
            .isString().withMessage('El nombre debe ser una cadena de caracteres'),
        body('Descripcion')
            .optional()
            .isString().withMessage('La descripción debe ser una cadena de caracteres')
        ];
}

