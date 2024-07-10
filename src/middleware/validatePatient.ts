import { body } from 'express-validator';
import moment from 'moment';
import { tipoDoc, formatoFecha, dominiosPermitidos } from '../constants';


const validationRegisterPatint = ()=>{
    return [
        body('documentoPac').notEmpty().withMessage("el documento es requerido"),
        body('tipoDoc').custom(values =>{
            if(!tipoDoc.includes(values)){
                throw new Error('Tipo de documento no válido');
            }
            return true;

        }),
        body('nombre')
        .notEmpty()
        .withMessage("El nombre es requerido"),

        body('apellido')
        .notEmpty()
        .withMessage("El apellido es requerido"),

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

        body('password')
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

        body('fechaNac').custom(value => {
            const fechaIngresada = moment(value, formatoFecha, true);
            if (!fechaIngresada.isValid()) {
                throw new Error(`Formato de fecha no válido. Use el formato ${formatoFecha}`);
            }
            if (fechaIngresada.isAfter(moment())) {
                throw new Error('La fecha no puede ser mayor al día de hoy');
            }
            return true;
        }),
        body('rol')
        .notEmpty()
        .withMessage("El nombre es requerido")
        .isIn(['paciente'])
        .withMessage("El rol debe ser paciente")
        
    ];
};

export default validationRegisterPatint;