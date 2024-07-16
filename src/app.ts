import  express  from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors';

import auht from './routes/auth';
import patient from './routes/patient';
import admin from './routes/admin';
import doctor from './routes/doctor';
import specialty from './routes/specialty';

dotenv.config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', auht);
app.use('/patient', patient);
app.use('/doctor', doctor);
app.use('/admin', admin);
app.use('/specialty', specialty);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});