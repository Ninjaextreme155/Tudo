function revisar(){
  var nome = document.getElementById('nome').value
  var quarto = document.getElementById('quarto').value
  var celular = document.getElementById('celular').value
  var ra = document.getElementById('ra').value
  var bolsa = document.getElementById('bolsa').value
  var trabalho = document.getElementById('trabalho').value
  var motivo = document.getElementById('motivo').value
  var destino = document.getElementById('destino').value
  var termo_sim = document.getElementById('termo_sim').checked
  var termo_nao = document.getElementById('termo_nao').checked
  var saida = document.querySelector('#saida').value
  var retorno = document.getElementById('retorno').value
  if(!nome||typeof nome === null||nome === undefined){
     alert('Nome invalido')
  }if(!quarto||typeof quarto === null||quarto === undefined){
     alert('Numero do quarto invalido')
  }if(!celular||typeof celular === null||quarto === undefined){
     alert('Numero de telefone invalido')
  }if(!bolsa||typeof bolsa===null||bolsa===undefined){
    alert('Plano de bolsa invalido')
  }if(!ra||typeof ra===null)
}