var x = parseFloat(prompt("quantos usuários devem ser cadastrados?"));
var n = [];

for (var i = 1; i <= x; i++) {
  var array = {
    nome: "",
    RG: 0,
    CPF: 0,
  }

  array.nome =(prompt("Digite seu nome")),
  array.RG = (prompt("Digite seu RG")),
  array.CPF =(prompt("Digite seu CPF"))


  n.push(array);
}
console.log(n)
for (var l of n) {
  document.write(`${l.nome} <br> `, `${l.RG} <br>`, `${l.CPF} <br>`)
  
}

