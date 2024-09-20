export default interface chatMessageInterface {
    role: 'user' | 'model';
    parts: string;
}