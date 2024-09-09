import EmailDto from "../dto/email/EmailDto";
import { messageEmail, buttonUrlValue, buttonTextValue, titleValue, imgUrlValue } from "../config/common/constants/email";

const creationEmail = (typeEmail: string, email: string, token?: string) => {
    switch (typeEmail) {
        case "welcome":
            return welcomeEmail(email);
        case "dataUpdate":
            return dataUpdateEmail(email);
        case "passwordRecovery":
            return passwordRecoveryEmail(email, token);
        case "passwordUpdate":
            return passwordUpdateEmail(email);
        default:
            throw new Error(`El tipo de email ${typeEmail} no es soportado`);
    }
};

// Función para email de bienvenida
const welcomeEmail = (email: string) => {
    const message = messageEmail.welcome;
    const buttonUrl = buttonUrlValue.welcome;
    const title = titleValue.welcome;
    const recipients = email;
    const img = imgUrlValue.welcome;
    const buttonText = buttonTextValue.welcome;
    return new EmailDto(message, buttonUrl, title, recipients, buttonText, img);
};

// Función para email de actualización de datos
const dataUpdateEmail = (email: string) => {
    const message = messageEmail.dataUpdate;
    const buttonUrl = buttonUrlValue.dataUpdate;
    const title = titleValue.dataUpdate;
    const recipients = email;
    const img = imgUrlValue.dataUpdate;
    const buttonText = buttonTextValue.dataUpdate;
    return new EmailDto(message, buttonUrl, title, recipients, buttonText, img);
};

// Función para email de recuperación de contraseña
const passwordRecoveryEmail = (email: string, token?: string) => {
    if (!token) {
        throw new Error("Token es requerido para la recuperación de contraseña");
    }
    const message = messageEmail.passwordRecovery;
    const buttonUrl = buttonUrlValue.passwordRecovery(token);
    const title = titleValue.passwordRecovery;
    const recipients = email;
    const img = imgUrlValue.passwordRecovery;
    const buttonText = buttonTextValue.passwordRecovery;
    return new EmailDto(message, buttonUrl, title, recipients, buttonText, img);
};

// Función para email de actualización de contraseña
const passwordUpdateEmail = (email: string) => {
    const message = messageEmail.passwordUpdate;
    const buttonUrl = buttonUrlValue.passwordUpdate;
    const title = titleValue.passwordUpdate;
    const recipients = email;
    const img = imgUrlValue.passwordUpdate;
    const buttonText = buttonTextValue.passwordUpdate;
    return new EmailDto(message, buttonUrl, title, recipients, buttonText, img);
};

export default creationEmail;
