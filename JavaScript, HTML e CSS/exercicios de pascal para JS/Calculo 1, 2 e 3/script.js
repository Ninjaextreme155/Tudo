var but1 = window.document.getElementById('but1')
var cal = window.document.getElementById('cal')
function calculo1(){
    but1.disabled = true
    but2.disabled = true
    but3.disabled = true
    var butfuncao = document.createElement('button')
    butfuncao.innerHTML = 'Função'
    butfuncao.style.width = '70px'
    butfuncao.onclick = function funcao(){
        
    }
    cal.appendChild(butfuncao)
    var br = document.createElement('br')
    cal.appendChild(br)
    var butlimite = document.createElement('button')
    butlimite.innerHTML = 'Limite'
    butlimite.style.width = '70px'
    butlimite.onclick = function limite(){
        
    }
    cal.appendChild(butlimite)
    var br1 = document.createElement('br')
    cal.appendChild(br1)
    var butderivada = document.createElement('button')
    butderivada.innerHTML = 'Derivada'
    butderivada.style.width = '70px'
    butderivada.onclick = function derivada(){

    }
    cal.appendChild(butderivada)
    var br1 = document.createElement('br')
    cal.appendChild(br1)
    var butintegral = document.createElement('button')
    butintegral.innerHTML = 'Integral'
    butintegral.style.width = '70px'
    butintegral.onclick = function integral(){

    }
    cal.appendChild(butintegral)
    var br2 = document.createElement('br')
    cal.appendChild(br2)
}
var but2 = window.document.getElementById('but2')
 var cal2 = window.document.getElementById('cal2')
function calculo2(){
    but1.disabled = true
    but2.disabled = true
    but3.disabled = true
    var bra = document.createElement('br')
    cal2.appendChild(bra)
    var butintegracao = document.createElement('button')
    butintegracao.innerHTML = 'Integração'
    butintegracao.onclick = function integracao(){

    }
    cal2.appendChild(butintegracao)
    butintegracao.style.marginLeft = "96px"
    butintegracao.style.fontSize = "12px"
    var brb = document.createElement('br')
    cal2.appendChild(brb)
    var butsequencias = document.createElement('button')
    butsequencias.innerHTML = 'Sequências'
    butsequencias.onclick = function sequencia(){

    }
    cal2.appendChild(butsequencias)
    butsequencias.style.marginLeft = "96px"
    butsequencias.style.fontSize = "11px"
}
var butreload = window.document.getElementById('butreload')
function recarregar(){
    location.reload()
}
var cal3 = document.getElementById('cal3')
var but3 = document.getElementById('but3')
function calculo3(){
but1.disabled = true
but2.disabled = true
but3.disabled = true
var bra1 = document.createElement('br')
cal3.appendChild(bra1)
var butmultiv = document.createElement('button')
butmultiv.innerHTML = 'multivariáveis'
butmultiv.onclick = function multivariaveis(){

}
cal3.appendChild(butmultiv)
butmultiv.id = 'butmult'
var bra2 = document.createElement('br')
cal3.appendChild(bra2)
var butedo = document.createElement('button')
butedo.innerHTML = 'EDO'
cal3.appendChild(butedo)
butedo.onclick = function edo(){

}
butedo.style.marginLeft ='194px'
butedo.style.width = '70px'
Selection
}
/*Geometria analítica no espaço
Vetores e suas aplicações
Funções de várias variáveis
Derivadas parciais e suas aplicações
Integrais de múltiplas variáveis
Teorema de Green, Divergência e Stokes*/