import jwt from 'jsonwebtoken';
import payload from '../config/common/interfaces/payloadToken'

let generateToken = (properties: payload, key: any, minutes: number) => jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (minutes * 60),
    data: properties}, key
);

export default generateToken;