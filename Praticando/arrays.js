// Arrays

const animals = [
    'Lion',
    'Monkey',
    'Cat',
]

// acessar valores dentro do Array

console.log(animals[2]) // a lista começa a partir do 0, então o 0 = Lion, 1 = Monkey e 2 = Cat

console.log(animals.length) // para saber o total de elementos

// é possível colocar também objects numa array, ex:

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
]

// para acessar uma propriedade do object, ficaria:

console.log(animals[2].name)