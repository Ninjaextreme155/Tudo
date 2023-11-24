function toggleOpcoes(opcoesId) {
    var opcoes = document.getElementById(opcoesId);
    var todasOpcoes = document.getElementsByClassName('opcoes');

    for (var i = 0; i < todasOpcoes.length; i++) {
        todasOpcoes[i].style.display = 'none';
    }

    if (opcoes.style.display === 'none') {
        opcoes.style.display = 'block';
    } else {
        opcoes.style.display = 'none';
    }
}

function sobre() {
    window.location.href = "sobre-nos.html";
}