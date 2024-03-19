//Defino a variável "palavra" como "Aula"
let palavra = "Aula";
//Defino a variável "palavra2" como "palavra.split(""). 
//Separo cada letra da string com ".palavra.split("").
let palavra2 = palavra.split("");
//Defino que a quantidade de vogais inicialmente é igual a 0
let QTDvogais = 0;

//Começo um looping "for" definindo i como 0 e, enquanto i for menor do que o comprimento da variável 2, ele irá ir incrementando 1 em 1 no i.
//i = a posição de cada palavra analisada.
for (let i = 0; i <= palavra2.length; i++) {
    //Defino "letraAtual" como palavra2[i], ou seja, defino "letraAtual" como a letra que está sendo analisada pelo "for" naquele determinado momento.
	let letraAtual = palavra2[i];
    //Defino vogais como a verificação de que se a letra que está sendo analisada é vogal ou não com o .includes().
	let vogais = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'].includes(letraAtual);
    //Caso a letraAtual for realmente uma vogal...
	if (vogais){
        //A quantidade de vogais irá aumentar.
		QTDvogais++;
	}
}

//Exibo a quantidade de vogais.
console.log("A quantidade de vogais é: " + QTDvogais);