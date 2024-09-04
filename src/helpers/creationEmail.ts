import EmailDto from "../dto/email/EmailDto";
import { messageEmail, buttonUrlValue, buttonTextValue, titleValue, imgUrlValue} from "../config/common/constants/email";

const creationEmail = (typeEmail: string, email: string) => {
    switch (typeEmail) {
        case "welcome":
            return  wecolmeEmail(email);
        default:
            throw new Error(`Email type ${typeEmail} not supported`);
    }
};

const wecolmeEmail = (email: string) => {
    const message: string = messageEmail.welcome;
    const buttonUrl: string = buttonUrlValue.welcome;
    const title: string = titleValue.welcome;
    const recipients: string = email;
    const img: string = imgUrlValue.welcome;
    const buttonText: string = buttonTextValue.welcome;
    return new EmailDto(message, buttonUrl, title, recipients, buttonText, img);
};

export default creationEmail;
