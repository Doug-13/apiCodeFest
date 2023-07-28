import { Request, Response } from "express";
import db from '../config/database';

async function listUsers(req: Request, res: Response) {
    db.connection.query('SELECT * FROM CLIENTS', (err, results) => {
        console.log(results)
        res.send(results);
    })
}

async function createtUsers(req: Request, res: Response) {
    const querysql = 'INSERT into CLIENTS (DS_NAME, NM_CELLPHONE, DS_STATUS) VALUES(?,?,?);'
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CELLPHONE,
        req.body.DS_STATUS

    )
    db.connection.query(querysql, params, (err, results) => {
        res.send('Cadastro Realizado com Sucesso' + results);
    })
}

async function putUser(req: Request, res: Response) {
    const querysql = 'UPDATE CLIENTS SET'
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CELLPHONE,
        req.body.DS_STATUS

    )
    db.connection.query(querysql, params, (err, results) => {
        res.send('Atualizado com Sucesso' + results);
    })
}
// async function putUser(req: Request, res: Response) {
    
// }

// async function deleteUser(req: Request, res: Response) {

// String sql = " DELETE FROM funcionarios WHERE idfuncionarios = " + idfuncionario ;
// Conexao.executar( sql );

// }

export default {
    listUsers,
    createtUsers,
    putUser
    // deleteUser
}