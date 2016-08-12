
# Aplicação de estudo de MEAN(MongoDb, Express.js, Angular e Node.js) .

Exemplo criado para estudo.

Foi criado dois sistema, um web-app e um server. 

## Web-app: Foi desenvolvido com Angular 1.

Para executar precisa subir a app em um servidor http, eu ultilizo o http-server.

```js
npm install http-server -g
```
Iniciar o servidor http dentro da pasta client.



## Server: Foi desenvolvido com Node.js.

Para executar precisa ter instalado o mongodb localmente ou criar uma conta no
[mongolab](https://mlab.com), e alterar o arquivo server/config/app.js colocando as configurações do mongo.

Apos isso, dar uma carga inicial no mongo executando o arquivo abaixo. 

```js
node server/carga-inicial.js 
```

Será criado um usuário admin/admin para acessar a aplicação.

