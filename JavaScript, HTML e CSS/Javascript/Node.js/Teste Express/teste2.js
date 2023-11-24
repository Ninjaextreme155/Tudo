const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste2', 'root', 'snoopy36', {
      host: "localhost",
      dialect: 'mysql'
});
//serve para dizer se esta funcionando ou não
sequelize.authenticate().then(function(){
    console.log('conectado com sucesso')
}).catch(function(erro){
    console.log('Deu errado se conectar: '+erro)
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }

})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER  
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: 'Christian',
    sobrenome: 'felipe',
    idade: 20,
    email: 'christian.306.com'
})

//Usuario.sync({force: true}) serve para criar a tabela