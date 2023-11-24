//&#128073 mao
// bandeira
function contar() {
    var res = window.document.getElementById('res')
    var initxt = window.document.getElementById('initxt')
    var fimtxt = window.document.getElementById('fimtxt')
    var pastxt = window.document.getElementById('pastxt')
    if (initxt.value.length == 0 || fimtxt.value.length == 0 || pastxt.value.length == 0) {
        window.alert('[ERRO]Falta de dados!')
    } else 
    var ini = Number(initxt.value)
    var fim = Number(fimtxt.value)
    var pas = Number(pastxt.value)
    if (pas<=0) { 
    window.alert('Numero invalido! Considerando PASSO 1')
    pas=1
    }
    if(fim>ini) {
    //contagem crecente
    for (c = ini;c <=fim;c += pas) {
        res.innerHTML += c+' &#128073 '
        }
        res.innerHTML += '&#127988'
    } else {
        for (c = ini;c>=fim;c-=pas) {
            res.innerHTML += c+ ' &#128073 '
        }
        res.innerHTML += '&#127988'
    }
}