Cadastro de pessoas em um banco de dados .json.
O sistema deve listar usuários, cadastrar, editar e remover.

$ npm init -y

$ npm i express nodemon ts-node @types/express

Criar pasta src
$ mkdir src

Criar arquivo server.ts
$ touch src/server.ts

Instalar Typescript
$ npm i typescript

configurar typescript
$ npx tsc --init


$ touch database.json

"start": "nodemon --exec ts-node src/server.ts"
// FUNÇÃO EXEC DO NODEMON FICA OLHANDO O ARQUIVO ts-node src/server.ts"

# MODELO DE BANCO DE DADOS

DELETE FROM ANIMALS 
WHERE FL_SEX ='F' 
AND ID_ANIMALS =5;


/*ATUALIZAR DADOS*/
UPDATE ANIMALS SET DS_NAME  = 'DOG SALSICHA'
WHERE ID_ANIMALS = 2;

/*FILTRAR DADOS NA TABELA*/
SELECT A.DS_NAME,A.NM_AGE FROM ANIMALS AS A
WHERE A.NM_AGE > 2
AND A.FL_SEX = 'M';

/*CONSULTAR DADOS NA TABELA*/
SELECT A.DS_NAME,A.NM_AGE FROM ANIMALS AS A;

/*INSERIR DADOS NA TABELA*/
INSERT into ANIMALS (DS_NAME,NM_AGE,FL_SEX) VALUES
('LILIKA', 1,'F');

/*DELETAR TABELA*/
DROP TABLE ANIMALS;

/*VISUALIZAR TODOS OS DADOS DA TABELA*/
SELECT * FROM ANIMALS;

/*Criar TABELA DE DADOS*/
CREATE TABLE ANIMALS (
ID_ANIMALS int NOT NULL AUTO_INCREMENT,
/*DS - DESCRIÇÃO*/
DS_NAME varchar(255) NOT NULL,
/*NM - NUMERO*/
NM_AGE INT,
/*FL - FLAG*/
FL_SEX ENUM('M','F'),
/*DT - DATA*/
DT_CREATED DATETIME DEFAULT current_timestamp,
PRIMARY KEY (ID_ANIMALS)
);

/*Criar base de dados*/
CREATE DATABASE PETSHOP;
/*SELECIONAR BASE CRIADA*/
USE PETSHOP;