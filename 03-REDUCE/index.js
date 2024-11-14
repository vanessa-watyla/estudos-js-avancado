//Reduce
//Reduce é uma forma mais generica de se tratar array
//No caso do Reduce ele itera sobre os arrays e passa retirnando um unico valor



//-----Exemplo-----

//Uma iteraçao onde soma as ordens das quantidades por um for normal

let ordens = [
  {cliente: 'Vanessa', tipo: 'compra', quantidade: 56, ativo: 'NFLX34'},
  {cliente: 'Krystian', tipo: 'compra', quantidade: 76, ativo: 'AAPL34'},
  {cliente: 'Maria', tipo: 'compra', quantidade: 21, ativo: 'GOOCL34'},
]


let quantidadeDeOrdens = 0
for (let index = 0; index < ordens.length; index++) {
  quantidadeDeOrdens += ordens[index].quantidade
  
}

console.log('For:', quantidadeDeOrdens)



//Aqui no exemplo eu pego o array com ordem
//E faço um laço for onde ele vai retornar a a soma da propriedade quantidade dentro do array ordens


// ----Exemplo------
//Usando reduce

let quantidadeDeOrdensUsandoReduce = ordens.reduce((somaOrdens, ordem) => somaOrdens + ordem.quantidade, 0)
console.log('Reduce', quantidadeDeOrdensUsandoReduce);

//Criei uma variavel ---quantidadeDeOrdensUsandoReduce--- onde atribuio o array ---ordens--- chamando o metodo reduce, passando uma função com os parametros somOrdens para somar, depois ordem para mostrar a posição
// Depois retorno somaOrdens + ordem acessando a propriedade quantidade do array e iniciando da posição 0. 
//Ele retorna a soma de todas as quantidades do array.

