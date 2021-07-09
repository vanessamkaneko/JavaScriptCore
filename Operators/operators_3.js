// Grouping operator ( )

let total = (2 + 5) * 2 // sem os parênteses, faria 5 * 2 primeiro e depois somaria com 2; agora pela soma estar entre parênteses, será feita primeiro;

// -----------------------------------------------------------------------

/* Operadores de comparação (IGUAL A | DIFERENTE DE) - NÃO USAR!!!!!!!!!!!!!

    - Irá comparar valores e retornar um Boolean como resposta à comparação

*/

let one = 1     
let two = 2

// ==     igual a 
console.log(two == 1)
console.log(one == "1")

// lembrando que aqui no JS apenas um sinal de = não é considerado como "igual a", e sim refere-se a "X coisa recebe tal valor"

// !=     diferente de
console.log(one != two)
console.log(one != one)
console.log(one != "1")

// -----------------------------------------------------------------

/* Operadores de comparação (ESTRITAMENTE IGUAL | ESTRITAMENTE DIFERENTE)

    - Irá comparar valores (os primeiros == e o != comparam valores, o terceiro elemento compara o tipo) e retornar um Boolean como resposta à comparação

*/

let one = 1     
let two = 2

// ===     estritamente igual a - compara os valores e o tipo do elemento; para ser true, tanto o valor quanto o tipo tem que ser iguais
console.log(one === "1") // false
console.log(one === 1)   // true

// !==     estritamente diferente de
console.log(two !== "2") // true
console.log(two !== 2)   // false

// -------------------------------------------------------------------

/* Operadores de comparação 

    - Irá comparar valores e retornar um Boolean como resposta à comparação
*/

let one = 1     
let two = 2

// >      maior que
console.log(one > two) // false

// >=     maior igual a
console.log(one >= 1)  // true - não é maior mas é igual
console.log(two >= 1)  // true - é diferente, mas é maior

// <      menor que
console.log(one < two) // true

// <=     menor igual a
console.log(one <= two) // true - é diferente, mas é menor
console.log(one <= 1)   // true - não é menor mas é igual
console.log(one <= 0)   // false