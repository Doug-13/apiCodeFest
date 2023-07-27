import { Request, Response } from "express";
//Importar o pacote File System para manipular arquivos
const fs = require('fs');
//Importar banco de dados de extensão .json
const data: string = './database.json';

async function listUsers(req: Request, res: Response) {
    const jsonData = fs.readFileSync(data);
    //Analisa string Jsone transforma 
    res.send(JSON.parse(jsonData));
}

async function postUsers(req: Request, res: Response) {
    //atribui a base de dados em nova variavel
    const jsonDataBase = fs.readFileSync(data);
    
    //analisa string JSON e transforma em um objeto JavaScript
    let content = JSON.parse(jsonDataBase);
    
    //verifica a quantidade de objetos na base de dados
    let index: number = Object.keys(content).length;
   
    //criar uma nova chave de objeto somando +1 do total de objetos 
    content[index++] = req.body;
    
    //analisa um objeto em JavaScript e transforma em uma string JSON
    const values = JSON.stringify(content);
    
    //lê o arquivo da base de dados e adiciona o novo objeto
    fs.writeFileSync(data, values);
    
    //retorno amigável para o usuário que chamou o endpoint
    res.status(201).send("User '" + req.body.username + "' registered successfulll!");
}

async function putUser(req: Request, res: Response) {
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
    
}

async function deleteUser(req: Request, res: Response) {

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
}

export default {
    listUsers,
    postUsers,
    putUser,
    deleteUser
}