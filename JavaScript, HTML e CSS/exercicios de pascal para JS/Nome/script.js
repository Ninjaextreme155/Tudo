/*program NOMECOMPLETO;
var NOME , SOBREN, NOMECOMPL : string;
begin
write('DIGITE NOME: ');
readln(NOME);
write('DIGITE SOBREN: ');
readln(SOBREN);
NOMECOMPL := NOME + SOBREN;
writeln('RESULTDO: ',NOMECOMPL);
end.*/ 
function nome(){
    var NOME = window.document.getElementById('nome')
    var SOBREN = window.document.getElementById('sobrenome')
    var NOMECOMPL = window.document.getElementById('nomecompl')
    NOMECOMPL.value=NOME.value+' '+SOBREN.value
}