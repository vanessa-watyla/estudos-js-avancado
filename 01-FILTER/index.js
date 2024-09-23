//Outras formas de se trabalhar com arrays
//Outra forma de se trabalhar com array é pelo filter.
//Ele basicamente serve para filtrar elemntos do array.
//Normalmente se filtraria um array por exemplo pelo for tradicional
//Exemplo

let pessoas = [
   { nome: 'Vanessa', idade: 25},
   { nome: 'Fulana', idade: 25},
   { nome: 'Siclana', idade: 27}
]

const pessoasComIdadeDe25Anos = []
for (let index = 0; index < pessoas.length; index++) {
    if(pessoas[index].idade === 25){
        pessoasComIdadeDe25Anos.push(pessoas[index])
    }
    
}

console.log('Resultado feito pelo for:', pessoasComIdadeDe25Anos);

//Aqui no exemplo foi criado um objeto chamado pessoas qu contém o nome e a idade
//Criei uma variável chamada pessoasComIdadeDe25Anos onde armazena um arry vazio
//Depois um for onde ele começa pela posição do primeiro elemento que é zero -> index = 0;
//Depois o index acessa o objeto pessoas e verifica o tamanho -> pessoas.length
//Depois ele incrementa o index mais um -> index++
//Dentro do for tem um if
//Que se o objetos pessoas vai ter o indice e ter a idade indentica a 25 anos ->  if(pessoas[index].idade === 25)
//ai ele retorna ele retorna o valor das pessoas com idade de 25 anos e colocar no array pessoas e mostrar o index ->  pessoasComIdadeDe25Anos.push(pessoas[index])

// ----- Mas tem uma forma mais simples de filtrar um array, pelo JS é pela propriedade filter()

//Exemplo

let pessoas2 = [
    { nome: 'Vanessa', idade: 25},
    { nome: 'Fulana', idade: 25},
    { nome: 'Siclana', idade: 27}
 ]

 const pessoasComIdadeDe25Anos2 = pessoas.filter((pessoa) => {
    return pessoa.idade === 25 
 })

 console.log('Resultado feito pelo filter:', pessoasComIdadeDe25Anos2);
 

 //O código fica mais limpo feito pelo filter
 //Vejamos temos o mesmo objeto pessoas2
 //Onde tem uma variaviavel chamadas pessoasComIdadeDe25Anos2 que armazena pessoas e filtra o paramento pessoa ->  const pessoasComIdadeDe25Anos2 = pessoas.filter((pessoa) =>
//Depois ele retorna a pesoa com idade igual a 25 anos ->   return pessoa.idade === 25 