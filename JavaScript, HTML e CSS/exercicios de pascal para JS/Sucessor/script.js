function bsuc(){
    var nusuc = window.document.getElementById('nsuc');
    var nures = window.document.getElementById('nres');
    var numsuc = Number(nusuc.value);
    nures.value = numsuc + 1; /*se vc adicionar o innerHTML ele manda o numero
     para o HTML e nao para a caixa de texto ou de numero*/
}
