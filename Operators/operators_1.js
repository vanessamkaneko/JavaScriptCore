/*

New 

- lef-hand-side-expression
- cria um novo objeto

*/

let name = new String ('Vanessa')
name.surName = "Kaneko"
let age = new Number (23)
let date = new Date ('2021-06-10')
console.log(name, age, date)

// -----------------------------------------------------

/* Operadores Unários
    - typeof
    - delete
*/

console.log(typeof 'Vane')

const person = {
    name: 'Vanessa',
    age: 23
}

delete person.age

console.log(person)