//Importar o pacote express para criar o servidor
const express = require("express")

// //Instancia o express na variável app
const app = express();

//para o express utilizar o json
app.use(express.json());

import userRouter from './routes/userRouter';

app.use('/api/', userRouter);

export default app;