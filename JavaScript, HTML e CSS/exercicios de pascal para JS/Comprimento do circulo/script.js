function compcir(){
    var crai = window.document.getElementById('crai')
    var R = Number(crai.value)
    var COMPRIC = window.document.getElementById('comp')
    if(R<=0){
        alert('digite numeros positivos, por favor')
    } else {
        COMPRIC.value = 3.14 * R * R
    }
}