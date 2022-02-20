alert("Digite o números de variaveis no prompt")
var x = parseFloat(prompt("Quantas variáveis deseja?"))

var n =[]

for( var i = 1; i<=x;i++ ){
var y = prompt(`Digite o ${i}° nota `)

n.push(parseFloat(y))
}
var soma=0

for ( var o of n ){
    soma+=o 
}
alert ("A soma de todos os números é " + soma) 
let q = soma/x
alert ("A média dos números digitados é "+ q)  

var bar=0

for (let l of n) {
    bar=Math.pow (l,2) 
  alert (" a exponenciação dos elementos digitaos são " + bar) 
}

var bar2=0

for (let v of n) {
    bar2=Math.sqrt (v) 
  alert (" a raiz quadrada dos elementos digitados são "+ bar2) 
}

var bar3=0

for (let A of n) {
  bar3=Math.cbrt(A)
alert(" a raiz cúbica dos elementos solicitados são: " + bar3)
}