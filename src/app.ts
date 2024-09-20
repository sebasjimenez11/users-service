import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import auht from './routes/authRouter';
import patient from './routes/patientRouter';
import admin from './routes/adminRouter';
import doctor from './routes/doctorRouter';
import specialty from './routes/specialtyRouter';
import samBot from './routes/chatRouter';

dotenv.config(); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', auht);
app.use('/patient', patient);
app.use('/doctor', doctor);
app.use('/admin', admin);
app.use('/specialty', specialty);
app.use('/samBot', samBot)

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});

export default app