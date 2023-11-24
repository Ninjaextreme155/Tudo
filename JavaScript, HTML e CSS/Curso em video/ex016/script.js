    var num = window.document.getElementById('ntxt')
    var ana = window.document.getElementById('selana')
    var resp = window.document.getElementById('res')
    var valores = []

    function isNumero(n){
        if(Number(n) >=1 && Number(n) <=100){
            return true
        } else {
            return false
        }

    }
    function inLista(n, l){
       if(l.indexOf(Number(n))!= -1){
        return true
       } else {
        return false
       }
    }
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    var item = window.document.createElement('option')
    item.text = 'Valor '+num.value+' adicionado'
    ana.appendChild(item)
    resp.innerHTML = ' '
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = ' '
    num.focus()
}
function finalizar(){
    if (valores.length == 0){
        window.alert('adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma+=valores[pos]
            if(valores[pos]>maior)
            maior = valores[pos]
            if (valores[pos]< menor)
            menor = valores[pos]
        }
        media = soma/tot
        resp.innerHTML = ' '
        resp.innerHTML += '<p>Ao todo, temos '+tot+' numeros cadastrados</p>'
        resp.innerHTML += '<p>O maior numero informado foi '+maior+' .</p>'
        resp.innerHTML += '<p>O menor numero informado foi '+menor+' .</p>'
        resp.innerHTML += '<p>A soma de todos o numeros da '+soma+' .</p>'
        resp.innerHTML += '<p>A media dos valores digitados é igual a '+media+' .</p>'
    }
}