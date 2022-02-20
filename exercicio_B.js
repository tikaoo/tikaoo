let x = prompt("Digite uma Palavra");
let u = x.toUpperCase()
let l = x.toLowerCase()
let s = x.split("")

document.write(`A Palavra  digitada em maiúsculas é ${u},</br>`);
document.write(`A Palavra  digitada em minúsculas é ${l},</br>`);
document.write(`Cada letra da Palavra  digitada é ${s},</br>`);
