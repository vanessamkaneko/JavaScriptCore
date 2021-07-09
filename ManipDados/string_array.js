// MANIPULANDO STRING E ARRAYS

// Separe um texto que contém espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram os espaços, coloque _

let phrase = "I wanna go shopping"
let myArray = phrase.split(" ") // split transforma string e array
let phraseWithUnderscore = myArray.join("_") // método join aplicado em um array faz a junção das palavras (um array retorna como string) dentro dos "" eu coloco como eu quero preencher os espaços

console.log(phraseWithUnderscore)

// --------------------------------------------------------

// STRING: Encontrando palavras/letras em frases

let phrase = "Eu gostaria que houvessem boas oportunidades para todos."
console.log(phrase.includes("para")) // lembrando que o includes é case sensitive (assim como o JS em si), então maiúsculas e minúsculas fazem toda a diferença

// --------------------------------------------------------

// Criar Array com construtor

let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// ---------------------------------------------------------

// Contar elementos de um Array

console.log(["a", "b", "c"].length)

console.log([
    "hello", 
    {type: "array"}, 
    function () { return "hi"}
].length)

// cada elemento no array pode ser um tipo de dado: na ordem - string, object, function

console.log([
    "hello", 
    {type: "array"}, 
    function () { return "hi"}
][1].type)        // acessando a propriedade do elemento 1, que é um object

console.log([
    "hello", 
    {type: "array"}, 
    function () { return "hi"}
][2]())  // fazendo rodar o elemento 2, que é uma função

// ----------------------------------------------------------------

// Transformar cadeia de caracteres (uma string) em elementos de um array 

let word = "computador"
console.log(Array.from(word)) // irá transformar cada letra em um elemento

// ------------------------------------------------------------------