const express = require('express');
const router = express.Router();
import userController from "../controller/userController";

//Listar usuários
router.get('/users/',userController.listUsers);

//Cadastrar usuario
router.post('/users/',userController.postUsers);

//Editar usuario
router.put('/user/:id',userController.putUser);

router.delete('/user/:id',userController.deleteUser);
    
export default router;
