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