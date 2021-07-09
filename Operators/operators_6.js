// Operador Condicional (Ternário)

// Dependendo da condição, receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// EXEMPLOS
// 1. Café da manhã topper - trabalhando com operadores lógicos

let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'Café topper' : 'Café ruim' 
console.log(niceBreakfast) // vai dar café topper porque os dois são true


let pao = true
let queijo = false 

const niceBreakfast = pao || queijo ? 'Café topper' : 'Café ruim' 
console.log (niceBreakfast) // vai dar café topper porque basta um ser true

// 2. Pessoa é maior de 18

let age = 16
const canDrive = age >= 18 ? "Can drive" : "Can't drive"
console.log(canDrive) // dará can't drive

// visão geral: se a condição dada for true, imprime uma mensagem, se for false, imprime outra | sendo o primeiro valor de significado positivo e o segundo valor, negativo (ou o primeiro sendo true e o segundo false)
// os valores podem ser strings, numbers, arrays, objects, functions...








