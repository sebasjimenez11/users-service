import { body } from "express-validator";
import { dominiosPermitidos } from '../constants';

const validateAuht = ()=>{
    return [
        body("password")
        .isLength({ min: 8 })
        .withMessage('La contraseña debe tener al menos 8 caracteres')
        .matches(/\d/)
        .withMessage('La contraseña debe contener al menos un número')
        .matches(/[a-z]/)
        .withMessage('La contraseña debe contener al menos una letra minúscula')
        .matches(/[A-Z]/)
        .withMessage('La contraseña debe contener al menos una letra mayúscula')
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage('La contraseña debe contener al menos un carácter especial'),

        body("document")
        .notEmpty()
        .withMessage("Documento es requerido"),

        body('email')
        .isEmail()
        .withMessage('Debe ser un correo electrónico válido')
        .custom(value => {
            const dominio = value.split('@')[1];
            if (!dominiosPermitidos.includes(dominio)) {
                throw new Error('Dominio de correo no permitido');
            }
            return true;
        }),
    ]
}

export default validateAuht;