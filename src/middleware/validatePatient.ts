import {  validateRoleField,validateStringField, validateTipoDocField, validateEmailField,validatePasswordField, validateDateField } from "../helpers/generateValidator";
import { tipoDoc, formatoFecha, dominiosPermitidos } from '../common/constants/constants';

export const validationRegisterPatient = () => {
    return [
        validateStringField('documentoPac', 'El documento es requerido'),
        validateTipoDocField('tipoDoc', tipoDoc),
        validateStringField('nombre', 'El nombre es requerido'),
        validateStringField('apellido', 'El apellido es requerido'),
        validateEmailField('email', dominiosPermitidos),
        validatePasswordField('password'),
        validateDateField('fechaNac', formatoFecha),
        validateRoleField('rol', ['paciente']) 
    ];
};

export const validationUpdatePatient = () => {
    return [
        validateStringField('documentoPac', 'El documento es requerido'),
        validateTipoDocField('tipoDoc', tipoDoc),
        validateStringField('nombre', 'El nombre es requerido'),
        validateStringField('apellido', 'El apellido es requerido'),
        validateEmailField('email', dominiosPermitidos),
        validateDateField('fechaNac', formatoFecha),
        validateStringField('direccion', 'La dirección es requerida'),
        validateStringField('telefono', 'El teléfono es requerido')
    ];
};
