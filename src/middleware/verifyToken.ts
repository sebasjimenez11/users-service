import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface payload {
    data: {
    email: string,
    rol : string
  },
    exp: number,
    iat: number
}

const validateToken = async (req: Request, res: Response, next: NextFunction) => {

    let authorization = req.get('Authorization');

    if (!authorization) {
      return res.status(403).json(
        { status: "The Authorization header is required"})
    }
      
    const token = authorization.split(' ')[1]; 
             
    if(!token) {
          return res.status(401).json(
                { status: 'you have not sent a token' }
        );
    };
    try {
        let decoden = jwt.verify(token, process.env.JWT_SECRET as string) as payload;
        
        req.body.email = decoden.data.email;
        req.body.rol = decoden.data.rol;
        next();

    } catch (error) {
        return res.status(403).json(
          { status: 'Unauthorized' }
    );
    }
}

export default validateToken;