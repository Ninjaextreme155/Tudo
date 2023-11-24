let caixa = window.document.getElementById('caixa')
var valor1 = null
var valor2 = null
var operacao = null

function adicionarnumero(numero){
    if(operacao===null){
        if(valor1===null){
            valor1 = numero
        } else {
            valor1 = Number(valor1.toString()+numero.toString())
    } 
    caixa.value = valor1
}else{
        if(valor2===null){
            valor2=numero
        } else {
            valor2= Number(valor2.toString()+numero.toString())
        }
        caixa.value = valor2
    }
}
function adicionaroperador(op){
    operacao=op
    caixa.value=' '
}
function resultado(event){
    var calcular
    switch (operacao) {
        case '³':
            calcular=Math.pow(valor1, 3)
            break;
        case 'x':
            calcular=valor1*valor2
            break;
        case '÷':
            calcular=valor1/valor2
            break;
        case '+':
            calcular=valor1+valor2
            break;
        case '-':
            calcular=valor1-valor2
            break;
        case '√':
            calcular=Math.sqrt(valor1)
            break;
        case '²':
            calcular=Math.pow(valor1, 2)
            break;
        default:
            calcular=null
            break;
    }
    caixa.value = calcular
    valor1=calcular
    valor2=null
    operacao=null
    
}
function limpar(){
    caixa.value=' '
    valor1=null
    valor2=null
    operacao=null
}