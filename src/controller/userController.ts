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

async function editUser(req: Request, res: Response) {
    const idUser = req.params.id;
    const querysql = 'UPDATE CLIENTS SET DS_NAME = ?, NM_CELLPHONE = ?, DS_STATUS=?WHERE ID_CLIENT =?';
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CELLPHONE,
        req.body.DS_STATUS,
        req.body.id
    );
    db.connection.query(querysql, params, (err, results) => {
        res.json({
            sucess: true,
            message: 'Alteração realizada com sucesso.',
            data: results
        });
    })
};

async function deleteUser(req: Request, res: Response) {
    const idUser = req.params.id;
    const querysql = 'delete from clients WHERE ID_CLIENT =?'

    db.connection.query(querysql, [idUser], (err, results) => {
        res.json({
            message: 'Cadastro apagado com Sucesso',
        });
    })
}


export default {
    listUsers,
    createtUsers,
    editUser,
    deleteUser
}