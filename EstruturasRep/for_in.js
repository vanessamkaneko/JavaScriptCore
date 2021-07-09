//For...In - cria um loop em cima de um objeto, fazendo o loop com suas propriedades (mostra as propriedades de um objeto)

let person = {
    name: 'Vanessa',
    age: 23,
    weight: 54.0
}

for(let property in person) {
    console.log(property)
}