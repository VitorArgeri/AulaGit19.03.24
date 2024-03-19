let palavra = "Hello World";
let palavra2 = "OpenAI GPT"

console.log("Texto: " + palavra + " e " + palavra2);

console.log("");

let letras = palavra.split("");
let letras2 = palavra2.split("");

let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

let QTDvogais1 = letras.filter(letras => vogais.includes(letras));
let QTDvogais2 = letras2.filter(letras2 => vogais.includes(letras2));
 
console.log("As vogais presentes são: " + QTDvogais1);
console.log("A quantidade de vogais é: " + QTDvogais1.length);

console.log("");

console.log("As vogais presentes são: " + QTDvogais2);
console.log("A quantidade de vogais é: " + QTDvogais2.length);