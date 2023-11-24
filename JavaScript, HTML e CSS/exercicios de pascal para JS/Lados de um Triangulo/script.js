
/*program LADOSTRIANG;
var A , B , C : integer;
var LADOS : real;
begin
write('DIGITE LADO A: ');
readln(A);
write('DIGITE LADO B: ');
readln(B);
write('DIGITE LADO C: ');
readln(C);
LADOS := (A+B+C)/2;
writeln('RESULTDO: ',LADOS);
end.*/
    var ladoA = window.document.getElementById('ladoA')
    var ladoB = window.document.getElementById('ladoB')
    var ladoC = window.document.getElementById('ladoC')
    var LADOS = window.document.getElementById('lado')
    var area2 = window.document.getElementById('area2')
    var areaespaco = window.document.getElementById('areaespaco')
function lado(){
    let A = Number(ladoA.value)
    let B = Number(ladoB.value)
    let C = Number(ladoC.value)
    LADOS.value = (A+B+C)/2
}
function Area(){
    areaespaco.style.display = 'block'
    let A = Number(ladoA.value)
    let B = Number(ladoB.value)
    let C = Number(ladoC.value)
    let P = Number(LADOS.value)
    area2.value = Math.sqrt(P*(P-A)*(P-B)*(P-C))
}
var ladosnormaisc = document.getElementById('ladosnormaisc')
var ladossemiperimetroc = document.getElementById('ladossemiperimetroc')
function botaonormais(){
    ladosnormaisc.style.display = 'block'
    ladosnormaisc.style.marginTop = '20px'
    ladossemiperimetroc.style.display = 'none'
}
function botaosemiperimetro(){
 ladossemiperimetroc.style.display = ' block'
 ladossemiperimetroc.style.marginTop = '20px'
 ladosnormaisc.style.display = 'none'
}
function perimetro(){
    var LadoA = window.document.getElementById('LadoA')
    var LadoB = window.document.getElementById('LadoB')
    var LadoC = window.document.getElementById('LadoC')
    var perimetro = window.document.getElementById('perimetro')
    let a = Number(LadoA.value)
    let b = Number(LadoB.value)
    let c = Number(LadoC.value)
    let p = Number(perimetro.value)
    var area = window.document.getElementById('area')
    area.value = Math.sqrt(p*(p-a)*(p-b)*(p-c))
}
