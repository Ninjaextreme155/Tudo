/*program MEDIAARIT; 
var N2 , N1, N3 : integer;
var MEDIA : real;
begin
write('DIGITE N1 : ');
readln(N1);
write('DIGITE N2: ');
readln(N2);
write('DIGITE N3: ');
readln(N3);
MEDIA := (N1 + N2 + N3)/3;
writeln('RESULTDO: ',MEDIA);
end.*/
function media(){
    var nota1 = window.document.getElementById('nota1')
    var nota2 = window.document.getElementById('nota2')
    var nota3 = window.document.getElementById('nota3')
    var MEDIA = window.document.getElementById('notafinal')
    var N1 = Number(nota1.value)
    var N2 = Number(nota2.value)
    var N3 = Number(nota3.value)
    MEDIA.value = (N1+N2+N3)/3
}