const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const admin = require("./routes/admin")
const mongoose = require("mongoose")
const session =  require("express-session")
const flash = require("connect-flash")
//Sessao 
 app.use(session({
   secret: "cursodenode",
   resave: true,
   saveUninitialized: true
 }))
 app.use(flash());
//Middleware
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg")
  res.locals.error_msg = req.flash("error_msg")
  next()
})

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
//Rotas
  app.use('/admin', admin)
//Mogoose
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://127.0.0.1/blogapp", { useMongoClient: true })
.then(() => {
    console.log("MongoDB Conectado...");
})
.catch((erro) => {
    console.log("Houve um erro ao se conectar ao MongoDB: " + erro);
});

//Public
  app.use(express.static(path.join(__dirname,"public")))
//Outros
const PORT = 8081
app.listen(PORT,function(){
    console.log("servidor Rodando ")
})