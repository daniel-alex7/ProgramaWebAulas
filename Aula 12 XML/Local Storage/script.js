// Local Storage

// 1 - Atribuir um valor a um item
var nome = prompt("Digite seu nome:");
var idade = prompt("Digite sua idade:");

localStorage.setItem("nome", nome);
localStorage.setItem("idade", idade);

// 2 - Obter um valor
console.log(localStorage.getItem(nome));
console.log(localStorage.getItem(idade));

// 3 - Remover um item
// localStorage.removeItem("nome");

// 4 - Obter o tipo de dado do item
console.log(typeof localStorage.getItem("nome")); // Corrigido "name" para "nome"

// 5 - Limpar todos os itens
// localStorage.clear();

sessionStorage.setItem("cidade", "São Paulo");
