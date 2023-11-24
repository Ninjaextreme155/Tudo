let num = [5,8,9,7,6,4,1,0]
num[8] = 2
num.push(3)
num.sort()
console.log('meu vetor é '+ num +' tem '+num.length+' posiçoes')
console.log('a primeira posição é '+num[0])
let valor = num.indexOf(8)
console.log('o valor esta na posiçao '+valor)