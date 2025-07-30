function inserirNome(){
   let nomeUsuario = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuario");
   elemento.textContent = nomeUsuario;
}

inserirNome();

//Lista de linguagens escritas:
const linguagens = ["JavaScript", "Python", "C++"]

console.log(linguagens[0]) // “JavaScript”
console.log(linguagens[1]) // “Python”
console.log(linguagens[2]) // “C++”


// Adicionar valores da lista na página com DOM.
const lista = document.querySelector("#lista");  //seleciona elemento com id "lista" e guarda na variável "lista"
lista.textContent = linguagens[0]; // altera o elemento HTML da variável "lista" para o valor 0 da lista "linguagens"
lista.textContent = linguagens[1]; 
lista.textContent = linguagens[2];

let aluno1 = {
  nome: "Joanir",
  idade: 43,
  anoLetivo: "Universidade",
  materiasFavoritas: ["Filsofia","Programação","História"]
}

console.log(aluno1.nome);
console.log(aluno1.idade)
console.log(aluno1.anoLetivo);
console.log(aluno1.materiasFavoritas[1]);


const objeto = document.querySelector("#aluno");
objeto.textContent = aluno1.nome;
