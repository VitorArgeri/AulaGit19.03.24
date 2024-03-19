function Crct(texto) {
    // Inicializando contadores
    let vogais = 0;
    let consoantes = 0;
    let espacos = 0;

    // Convertendo o texto para minúsculas para facilitar a comparação
    texto = texto.toLowerCase();

    // Loop através de cada caractere na string
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        // Verificando se o caractere é uma vogal, consoante ou espaço
        if (char >= 'a' && char <= 'z') {
            if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
                vogais++;
            } else {
                consoantes++;
            }
        } else if (char === ' ') {
            espacos++;
        }
    }

    // Exibindo os resultados
    console.log('O número de vogais:', vogais);
    console.log('O número de consoantes:', consoantes);
    console.log('O número de espaços:', espacos);
}

// Exemplo de uso
Crct('Vitor de Almeida Argeri');