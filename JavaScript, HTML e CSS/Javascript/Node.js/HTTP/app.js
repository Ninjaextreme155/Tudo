//chama o modulo http
var http = require('http')
//createServer =  criar servidor, listen = serve para informar em que porta vai se abrir o servidor
http.createServer(function(req,res){
      //sempre que for rodar isso tem que reiniciar o servidor
      res.end('Oi para  o mundo inteiro')
}).listen(8081)

console.log('o servidor esta rodando!')