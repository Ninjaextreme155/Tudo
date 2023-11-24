/*program CONSUMOMEDIO;
var D , LIT : integer;
var CM : real;
begin
write('DIGITE D: ');
readln(D);
write('DIGITE LIT: ');
readln(LIT);
CM := D/LIT;
writeln('RESULTDO: ',CM);
end.*/
function consumedio(){
    var distancia = window.document.getElementById('distancia')
    var litros = window.document.getElementById('litros')
    var CM = window.document.getElementById('consumedio')
    var D = Number(distancia.value)
    var LIT = Number(litros.value)
    CM.value = D/LIT
}