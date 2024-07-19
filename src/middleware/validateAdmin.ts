import { body } from "express-validator"
import { dominiosPermitidos } from "../common/constants/constants";

export const adminUpdateValidate = ()=>{
    return [
        
        body('documento')
            .notEmpty()
            .withMessage('El documento es requerido'),

        body('nombre')
            .notEmpty()
            .withMessage('El nombre es requerido'),

        body('apellido')
            .notEmpty()
            .withMessage('El apellido es requerido'),

        body('email')
            .isEmail()
            .withMessage('Debe ser un correo electrónico válido')
            .custom(value => {
                const dominio = value.split('@')[1];
                if (!dominiosPermitidos.includes(dominio)) {
                    throw new Error('Dominio de correo no permitido');
                }
                return true;
            })
    ]
} 