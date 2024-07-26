import { validateStringField, validateEmailField, } from "../helpers/generateValidator";
import { dominiosPermitidos } from '../common/constants/constants';

export const adminUpdateValidate = () => {
    return [
        validateStringField('documento', 'El documento es requerido'),
        validateStringField('nombre', 'El nombre es requerido'),
        validateStringField('apellido', 'El apellido es requerido'),
        validateEmailField('email', dominiosPermitidos)
    ];
};  