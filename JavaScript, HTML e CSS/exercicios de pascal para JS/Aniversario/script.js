function aniver() {
  var nome = document.getElementById('nome').value;
  var day1 = parseInt(document.getElementById('dataani').value);
  var mounth1 = parseInt(document.getElementById('mounth').value);
  var res = document.getElementById('res');

  var data = new Date();
  var mes = data.getMonth() + 1;
  var dia = data.getDate();

  if (dia === day1 && mes === mounth1) {
    res.innerHTML = nome + ' Parabéns, é o seu aniversário!';
  } else {
    var currentYear = data.getFullYear();
    var aniversarioDate = new Date(currentYear, mounth1 - 1, day1);
    if (aniversarioDate < data) {
      // Se a data de aniversário já passou este ano, calcule para o próximo ano
      aniversarioDate = new Date(currentYear + 1, mounth1 - 1, day1);
    }
    var timeDiff = aniversarioDate - data;
    var daysUntilBirthday = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    res.innerHTML = nome + ', faltam ' + daysUntilBirthday + ' dias para o seu aniversário!';
  }
}