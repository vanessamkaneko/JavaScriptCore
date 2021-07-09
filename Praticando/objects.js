// Objects

const person = {
    name: "Vanessa",
    age: 23,
    weight: 43.5,
    isAdmin: true 
}

console.log(`${person.name} tem ${person.age} anos e ${person.weight} kg.`) // interpolando

console.log(person.name + ' tem ' + person.age + ' anos e ' + person.weight + ' kg. ') // concatenando

// qualquer info desta que eu alterar na pessoa, irá altera aí em cima também.