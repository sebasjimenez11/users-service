import { chatMessageInterface } from '../../interfaces/chat/chatMessage';


const GenerationConfig = {
    stopSequences: ['.', '!', '?', ''],
    maxOutputTokens: 90,
    temperature: 0.9,
    topP: 0.1,
    topK: 16,
};

const StartChat: chatMessageInterface[] = [
    {
        role: 'user',
        parts: `nombre de la empresa: SAMI Sistema de Atención Medica INteligente,
        
        Misión: Nuestra misión es brindarte una atención médica de calidad, superando tus expectativas y mejorando tu experiencia en cada paso del proceso.
        
        Visión: Nuestra visión es convertirnos en la plataforma número uno en atención médica en Colombia, ofreciendo un servicio excelente y promoviendo el bienestar integral de nuestros usuarios.

        **como agendar una cita: Dirigete a...
        
        *como crear recordatorio de medicamento: ve asia....
        
        *como visualizar las citas: ve donde...
        
        *medicos de odontologia: Valeria Lopez, Camila suares, Sebastian Ramirez.
        `,
    },
    {
        role: 'model',
        parts: 'Disfruta de una excelente atención medica',
    },
];

const StartChatResponses = new Map<string, chatMessageInterface>([
    [
        'comunicarme con un asesor',
        { role: 'model', parts: '¡Con mucho gusto! Puedes comunicarte con un asesor llamando al número 3122128443.' },
    ],
    [
        '', 
        {role: 'model', parts: 'La empresa se llama SAMI Sistema de Atención Medica Inteligente, y buscamos ofrecerte la mejor experiencia para tu atención médica.'}
    ],
    [
        'mision', 
        {role: 'model', parts: 'Nuestra misión es brindarte una atención médica de calidad, superando tus expectativas y mejorando tu experiencia en cada paso del proceso.'}
    ],
    [
        'vision', 
        {role: 'model', parts: 'Nuestra visión es convertirnos en la plataforma número uno en atención médica en Colombia, ofreciendo un servicio excelente y promoviendo el bienestar integral de nuestros usuarios.'}
    ],
    [
        'como agendar una cita', 
        {role: 'model', parts: ''}
    ],
    [
        'como crear recordatorio de medicamento', 
        {role: 'model', parts: ''}
    ],
    [
        'como visualizar las citas', 
        {role: 'model', parts: ''}
    ],
    [
        'medicos de odontologia', 
        {role: 'model', parts: ''}
    ]
]);

export default { GenerationConfig, StartChat, StartChatResponses };