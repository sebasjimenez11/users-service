import  express  from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import auht from './src/routes/auth';

dotenv.config();
const app = express();
app.use(bodyParser.json());

app.use('/auht', auht);



const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});