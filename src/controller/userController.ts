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

export default {
    listUsers,
    postUsers
}