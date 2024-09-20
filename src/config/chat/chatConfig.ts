import chatMessageInterface  from '../../config/common/interfaces/chatMessageInterface';

const GenerationConfig = {
    maxOutputTokens: 190,
    temperature: 0.7,
    topP: 0.2,
    topK: 20,
};

const StartChat: chatMessageInterface[] = [
    {
        role: 'user',
        parts: ``,
    },
    {
        role: 'model',
        parts: '',
    },
];

const StartChatResponses = new Map<string, chatMessageInterface>([
    [
        'comunicarme con un asesor',
        { role: 'model', parts: '¡Con mucho gusto! Puedes comunicarte con un asesor llamando al número 3122128443.' },
    ]
]);

export default { GenerationConfig, StartChat, StartChatResponses };