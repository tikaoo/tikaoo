let a = parseInt(prompt("Digite o primeiro valor"))
let b = parseInt(prompt("Digite o primeiro valor"))
let c = parseInt(prompt("Digite o primeiro valor"))

if (a + b > c && a + c > b && b + c > a)
  if (a == b && a == c) 
    alert("Esse é um triângulo Equilatero")
  else if (a == b || a == c || b == c)
    alert("Esse triângulo é isósceles")
  else 
    alert("Esse triângulo é Escaleno")
