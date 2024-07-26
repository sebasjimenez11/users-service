import { body } from 'express-validator';
import moment from 'moment';

// Función para validar campos de tipo string no vacíos
export const validateStringField = (fieldName: string, errorMessage: string) => {
    return body(fieldName).notEmpty().withMessage(errorMessage).isString().withMessage(`el campo ${fieldName} debe ser string`);
};

// Función para validar email con dominio permitido
export const validateEmailField = (fieldName: string, allowedDomains: string[]) => {
    return body(fieldName)
        .isEmail()
        .withMessage('Debe ser un correo electrónico válido')
        .custom(value => {
            const domain = value.split('@')[1];
            if (!allowedDomains.includes(domain)) {
                throw new Error('Dominio de correo no permitido');
            }
            return true;
        });
};

// Función para validar password con criterios específicos
export const validatePasswordField = (fieldName: string) => {
    return body(fieldName)
        .isLength({ min: 8 })
        .withMessage('La contraseña debe tener al menos 8 caracteres')
        .matches(/\d/)
        .withMessage('La contraseña debe contener al menos un número')
        .matches(/[a-z]/)
        .withMessage('La contraseña debe contener al menos una letra minúscula')
        .matches(/[A-Z]/)
        .withMessage('La contraseña debe contener al menos una letra mayúscula')
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage('La contraseña debe contener al menos un carácter especial');
};

// Función para validar fecha
export const validateDateField = (fieldName: string, dateFormat: string) => {
    return body(fieldName).custom(value => {
        const date = moment(value, dateFormat, true);
        if (!date.isValid()) {
            throw new Error(`Formato de fecha no válido. Use el formato ${dateFormat}`);
        }
        if (date.isAfter(moment())) {
            throw new Error('La fecha no puede ser mayor al día de hoy');
        }
        return true;
    });
};

// Función para validar tipo de documento
export const validateTipoDocField = (fieldName: string, validValues: string[]) => {
    return body(fieldName).custom(value => {
        if (!validValues.includes(value)) {
            throw new Error('Tipo de documento no válido');
        }
        return true;
    });
};

export const validateRoleField = (fieldName: string, allowedRoles: string[]) => {
    return body(fieldName)
        .notEmpty()
        .withMessage('El rol es requerido')
        .isIn(allowedRoles)
        .withMessage(`El rol debe ser uno de los siguientes: ${allowedRoles.join(', ')}`);
};

// Función para validar campos numéricos
export const validateNumericField = (fieldName: string, errorMessage: string) => {
    return body(fieldName)
        .notEmpty()
        .withMessage(errorMessage)
        .isNumeric()
        .withMessage('El valor debe ser numérico');
};

// Función para validar campos opcionales de tipo string
export const validateOptionalStringField = (fieldName: string, errorMessage: string) => {
    return body(fieldName)
        .optional()
        .notEmpty()
        .withMessage(errorMessage);
};

