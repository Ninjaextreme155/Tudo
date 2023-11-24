/*program AREATRIANG;
var B , H : integer;
var AREA : real;
begin
write('DIGITE BASE: ');
readln(B);
write('DIGITE ALTURA: ');
readln(H);
AREA := (B*H)/2;
writeln('RESULTDO: ',AREA);
end.*/
function areatriang(){
    var base = window.document.getElementById('base')
    var altura = window.document.getElementById('altura')
    var AREA = window.document.getElementById('areatriang')
    var B = Number(base.value)
    var H = Number(altura.value)
    AREA.value = (B*H)/2
}