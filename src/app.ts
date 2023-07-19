//Importar o pacote express para criar o servidor
const express = require("express")

//Importar o pacote File System para manipular arquivos
const fs = require('fs');

//Importar banco de dados de extensão .json
const data: string = './database.json';

//Instancia o express na variável app
const app = express()
//para o express utilizar o json
app.use(express.json());

export default app;



//Listar usuários
app.get('/api/users', (req: any, res: any) => {
    const jsonData = fs.readFileSync(data);
    //Analisa string Jsone transforma 
    res.send(JSON.parse(jsonData));
});

//Cadastrar usuario
app.post('/api/users', (req: any, res: any) => {
    //atribui a base de dados em nova variavel
    const jsonDataBase = fs.readFileSync(data);
    
    //analisa string JSON e transforma em um objeto JavaScript
    let content = JSON.parse(jsonDataBase);
    
    //verifica a quantidade de objetos na base de dados
    let index: number = Object.keys(content).length;
    // console.log(req.body)
    //criar uma nova chave de objeto somando +1 do total de objetos 
    content[index++] = req.body;
    
    //analisa um objeto em JavaScript e transforma em uma string JSON
    const values = JSON.stringify(content);
    
    //lê o arquivo da base de dados e adiciona o novo objeto
    fs.writeFileSync(data, values);
    
    //retorno amigável para o usuário que chamou o endpoint
    res.status(201).send("User '" + req.body.username + "' registered successfulll!");
});

//Editar usuario
app.put('/api/user/:id', (req: any, res: any) => {
    //atribui a base de dados em nova variavel
    const jsonDataBase = fs.readFileSync(data);

    //recupera o id enviado por parametro
    const userId = req.params.id;
    
    //analisa string JSON e transforma em um objeto JavaScript
    let content = JSON.parse(jsonDataBase);
    
    //atribui os dados da requisição ao usuario existente na base de dados
    content[userId] = req.body;
    
    //analisa um objeto em JavaScript e transforma em uma string JSON
    const values = JSON.stringify(content);
    
    //lê o arquivo da base de dados e adiciona o novo objeto
    fs.writeFileSync(data, values);

    //retorno amigável para o usuário que o endpoint
    res.send(`User with id ${userId} has been updated`)
});

app.delete('/api/user/:id', (req: any, res: any) => {
    //atribui a base de dados em nova variavel
    const jsonDataBase = fs.readFileSync(data);

    //recupera o id enviado por parametro
    const userId = req.params.id;
    
    //analisa string JSON e transforma em um objeto JavaScript
    let content = JSON.parse(jsonDataBase);
    
    //delete
    delete content[userId];
    
    //analisa um objeto em JavaScript e transforma em uma string JSON
    const values = JSON.stringify(content);

    //lê o arquivo da base de dados e adiciona o novo objeto
    fs.writeFileSync(data, values);

    //retorno amigável para o usuário que o endpoint
    res.send(`User with id ${userId} has been deleted`);
});
