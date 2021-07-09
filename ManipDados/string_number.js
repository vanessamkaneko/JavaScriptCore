// MANIPULANDO STRINGS E NUMBERS

// Transformar String em Number e Number em String

let stringUm = "123"
Number(stringUm)

//console.log(Number(stringUm))

let nameDois = 40
String(nameDois)

//console.log(String(nameDois))

// --------------------------------------------------------------------------------------------

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Otorrinolaringologista"
console.log(word.length)

let number = 58492832
console.log(String(number).length)
// --------------------------------------------------------------------------------------------

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 435.75847
console.log(number.toFixed(2)) // no parênteses do toFixed eu coloco o número de casas decimais que quero; isso irá me retornar uma String

console.log(number.toFixed(2).replace(".",",")) // e como o retorno é uma String, consigo atrelar métodos a ela... Lembrando que um número quebrado deve ser com ponto (.) e não com vírgula (,)!

// --------------------------------------------------------------------------------------------

// Transformar letras minúsculas em maiúsculas e vice-versa

let word = "Beber água é muito importante!"
console.log(word.toUpperCase()) // tudo em caixa alta
console.log(word.toLowerCase()) // tudo minúsculo
