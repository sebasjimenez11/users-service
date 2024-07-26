// src/validators/specialtyValidator.ts
import { validateStringField} from "../helpers/generateValidator";

export const specialtyValidator = () =>{
    return [
        validateStringField('Codigo_Espc', 'El código de especialidad es requerido'),
        validateStringField('Nombre', 'El nombre es requerido'),
        validateStringField('Descripcion', 'La descripción debe ser una cadena de caracteres')
    ];
}