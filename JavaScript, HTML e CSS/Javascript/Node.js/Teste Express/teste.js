const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

// Configuração do Handlebars com as opções de tempo de execução
const Handlebars = handlebars.create({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  helpers: {
    // Defina seus próprios ajudantes (helpers) personalizados aqui
  },
  runtimeOptions: {
    allowProtoPropertiesByDefault: true, // Desativa a verificação de propriedades herdadas
  },
});

app.engine('handlebars', Handlebars.engine);
app.set('view engine', 'handlebars');
//Body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rotas
app.get('/cad', function(req, res) {
    res.render('formulario');
});

app.get('/', function(req, res) {
    Post.findAll({order: [['id', 'DESC']]}).then(function(posts) {
        res.render('home', { posts: posts });
    });
});

app.post('/add', function(req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function() {
        res.redirect('/');
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro);
    });
});

app.get('/delete/:id',function(req,res){
    Post.destroy({where: {'id':req.params.id}}).then(function(){
        res.send("Postagem deletada com sucesso")
    }).catch(function(erro){
        res.send("Esta postagem nao existe ")
    })
})
//conteudo
//conteudo
/*app.get("/", function(req,res){
     res.sendFile(__dirname + "/html/index.html")
})
app.get("/sobre", function(req,res){
    res.sendFile(__dirname + "/html/sobre.html")
})
app.get("/blog", function(req,res){
    res.send("Bem-Vindo ao me blog")
})

app.get("/ola/:nome/:cargo/:cor", function(req,res){
    res.send('<h1>Ola '+req.params.nome+'</h1>'+'<h2>seu cargo é '+req.params.cargo+'</h2>'+'<h3>sua cor favorita é '+req.params.cor+'</h3>')
})*/

app.listen(8081, function(){
     console.log('sevidor rodando na url http://localhost:8081')
})