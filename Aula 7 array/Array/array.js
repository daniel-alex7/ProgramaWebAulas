// vetores - arrays 
// um vetor é uma lista, uma coleção de dados
// um array pode guardar vários tipos de dados
// um array é uma estrutura indexada, ou seja, cada elemento do array tem um índice
// o índice do primeiro elemento é 0, o do segundo é 1, e assim por diante


let vetorDeNumeros = [12, 13, 45, 34, 56];

console.log(vetorDeNumeros)

// Obter tamnho no array;
console.log("Tamanho do array: " + vetorDeNumeros)

// Exibindo com for
for(i=0; i < vetorDeNumeros.length ; i++){
    console.log(vetorDeNumeros[i])
}

//Adicionar elementos no array:

vetorDeNumeros.push(60);
vetorDeNumeros.push(45)

//Adicionar elementos no inicio do array:

vetorDeNumeros.unshift(2340)


// Remove o ultimo elemento

vetorDeNumeros.pop();
