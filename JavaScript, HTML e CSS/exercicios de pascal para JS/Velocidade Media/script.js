/*program VELOCMEDIA;
var S , T : integer;
var VM : real;
begin
write('DIGITE S: ');
readln(S);
write('DIGITE T: ');
readln(T);
VM := S/T;
writeln('RESULTDO: ',VM);
end.*/
function velomedia(){
    var Tempo = window.document.getElementById('Tempo')
    var Espaço = window.document.getElementById('Espaço')
    var VM = window.document.getElementById('velomedia')
    var T = Number(Tempo.value)
    var S = Number(Espaço.value)
    VM.value = S/T
}
