import axios from 'axios';
import EmailDto from '../dto/email/EmailDto';

const azuereShippingEmail = async (email: EmailDto)=>{
    try {
        const response = await axios.post('https://serviciomensajeria.azurewebsites.net/api/enviocorreos',{
            message: email.message,
            buttonUrl: email.buttonUrl,
            title: email.title,
            recipients: email.recipients,
            emailType: email.emailType,
            buttonText: email.buttonText
        })
    } catch (error) {
        console.error('Error sending data:', error)
    }
}

export default azuereShippingEmail;