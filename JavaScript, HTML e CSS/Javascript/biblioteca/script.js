/*Adicionar um livro à biblioteca: Crie um método chamado adicionarLivro que permita adicionar um livro à coleção. Cada livro deve ser representado como um objeto com propriedades como título, autor, ano e gênero.

Listar todos os livros: Crie um método chamado listarLivros que exiba no console todos os livros da biblioteca, formatados de forma legível.

Pesquisar livros por autor: Crie um método chamado pesquisarPorAutor que aceite o nome de um autor como parâmetro e exiba no console todos os livros escritos por esse autor, caso existam na coleção.

Pesquisar livros por gênero: Crie um método chamado pesquisarPorGenero que aceite um gênero como parâmetro e exiba no console todos os livros desse gênero presentes na coleção.

Contar livros: Crie um método chamado contarLivros que retorne o número total de livros na biblioteca.*/
var biblioteca = {
    livros: [],

    adicionarlivro: function() {
        var novoLivro = {
            titulo: adicionarlivro.value,
            autor: adicionarautor.value,
            ano: adicionarano.value,
            genero: adicionargenero.value
        };
        
        this.livros.push(novoLivro);

        // Limpe os campos do formulário
        adicionarlivro.value = '';
        adicionarautor.value = '';
        adicionarano.value = '';
        adicionargenero.value = '';
        
        // Chame a função para exibir a lista de livros
        this.listarlivros();
    },

    listarlivros: function() {
        var tabela = document.getElementById('tabela');
        tabela.innerHTML = '';
        // Itere pelos livros e adicione-os à tabela com o rótulo "Livro X"
        for (var i = 0; i < this.livros.length; i++) {
            var livro = this.livros[i];
            var row = tabela.insertRow(i);
            var numLivro = i + 1; // Número do livro

            // Crie uma célula para o rótulo
            var rotuloCell = row.insertCell(0);
            rotuloCell.innerHTML = 'Livro ' + numLivro;

            // Crie células para as outras propriedades do livro
            var tituloCell = row.insertCell(1);
            var autorCell = row.insertCell(2);
            var anoCell = row.insertCell(3);
            var generoCell = row.insertCell(4);

            tituloCell.innerHTML = livro.titulo;
            autorCell.innerHTML = livro.autor;
            anoCell.innerHTML = livro.ano;
            generoCell.innerHTML = livro.genero;
        }
    }
};

var botao1 = document.getElementById('botao1');
botao1.addEventListener('click', function() {
    biblioteca.adicionarlivro();
    var titulos = document.getElementById('titulos')
    titulos.style.display = 'block'
});

