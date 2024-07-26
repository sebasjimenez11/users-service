import { validateOptionalStringField,validateStringField, validateEmailField,validatePasswordField, validateNumericField } from "../helpers/generateValidator";
import { dominiosPermitidos } from '../common/constants/constants';

export const doctorValidator = () => {
    return [
        validateStringField('tarjetaProf', 'La tarjeta profesional es requerida'),
        validateStringField('documento', 'El documento es requerido'),
        validateStringField('nombre', 'El nombre es requerido'),
        validateStringField('apellido', 'El apellido es requerido'),
        validateStringField('rol', 'El rol es requerido').isIn(['medico']).withMessage('El rol debe ser "medico"'),
        validateEmailField('email', dominiosPermitidos),
        validatePasswordField('password'),
        validateNumericField('valorCita', 'El valor de la cita es requerido'),
        validateStringField('codigoEspc','El código de especialidad debe ser una cadena de caracteres')
    ];
};

export const validationUpdateProfile = () => {
    return [
        validateOptionalStringField('tarjetaProf', 'La tarjeta profesional es requerida'),
        validateOptionalStringField('documento', 'El documento es requerido'),
        validateOptionalStringField('nombre', 'El nombre es requerido'),
        validateOptionalStringField('apellido', 'El apellido es requerido'),
        validateEmailField('email', dominiosPermitidos),
        validateNumericField('valorCita', 'El valor de la cita es requerido'),
    ];
};

