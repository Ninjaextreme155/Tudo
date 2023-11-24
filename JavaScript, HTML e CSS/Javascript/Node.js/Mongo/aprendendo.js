const mongoose = require("mongoose")

// Configurando o mongoose
mongoose.Promise = global.Promise
mongoose.connect("mongodb://127.0.0.1/aprendendo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(function(){
    console.log("MongoDB Conectado...")
}).catch(function(erro){
    console.log("Houve um erro ao se conectar ao MongoDB: " + erro)
})
//Model - Usuarios

const UsuarioSchema = mongoose.Schema({

    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})

mongoose.model('usuarios', UsuarioSchema)

const Chris = mongoose.model('usuarios')

new Chris({
    nome: "Christian",
    sobrenome: "Lima",
    email: "christian.gmail.com",
    idade: 20,
    pais: "Brasil"
}).save().then(function(){
    console.log("Dados inseridos")
}).catch(function(erro){
    console.log("Não foi possivel inserir por: "+erro)
})