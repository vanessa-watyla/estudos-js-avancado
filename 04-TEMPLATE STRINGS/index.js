//TEMPLATE STRINGS: Interpolando strings ou template strings
//O que seria interpolar? Colocar entre
//Seria colocar uma variável entre uma string
//Pode ser injetado dentro da string uma variável, função ou uma expressão aritmetica

//Exemplo

const imprimirNomePessoa = (primeiroNome, segundoNome, idade) => {
  return 'Primeiro nome: ' + primeiroNome + ', Segundo Nome: ' + segundoNome + ', idade: ' + idade + '.'
}

console.log(imprimirNomePessoa("Vanessa", "Watyla", 26))

//Antes a concatnação das palavras era feita através do +

//Com a interpolação usamos a crase ` ` para fazer a concatenação

//Exemplo:


const imprimirNomePessoaComInterpolacao = (primeiroNome, segundoNome, idade) => {
  return `Primeiro nome: ${primeiroNome}, Sengundo nome: ${segundoNome}, idade ${idade}` 
}

console.log(`Print com interpolação -> ${imprimirNomePessoaComInterpolacao('Vanessa', 'Souza', 26)}`)

// ${} é onde injetaremos a variável.