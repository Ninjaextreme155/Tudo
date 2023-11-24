/* program SALARIOLIQ;
var SL , SB , D : integer;
begin
write('DIGITE SB: ');
readln(SB);
write('DIGITE D: ');
readln(D);
SL := SB - D;
writeln('RESULTDO: ',SL);
end.*/
function salarioliq(){
    var salabrut = window.document.getElementById('salabrut')
    var desconto = window.document.getElementById('desconto')
    var SL = window.document.getElementById('salaliq')
    var SB = Number(salabrut.value)
    var D = Number(desconto.value)
    SL.value=SB-D
}