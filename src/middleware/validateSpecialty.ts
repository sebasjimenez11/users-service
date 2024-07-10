// src/validators/specialtyValidator.ts

import { body } from 'express-validator';

export const specialtyValidator = [
    body('codigoEspc')
        .notEmpty().withMessage('El código de especialidad es requerido')
        .isString().withMessage('El código de especialidad debe ser una cadena de caracteres'),
    body('nombre')
        .notEmpty().withMessage('El nombre es requerido')
        .isString().withMessage('El nombre debe ser una cadena de caracteres'),
    body('descripcion')
        .optional()
        .isString().withMessage('La descripción debe ser una cadena de caracteres')
];
