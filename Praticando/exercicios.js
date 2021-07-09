// 1. Declare uma variável de nome weight.
let weight 

// 2. Que tipo de dado é a variável acima? R: Undefined
console.log(typeof weight)

/* 
    3. Declare uma variável e atribua valores para cada um dos dados:
        *name: String
        *age: Number (integer - número inteiro)
        *weight: Number (float - número quebrado)
        *isSubscribed: Boolean
*/

let name = "Juju"
let age = 20
let weight = 55.6
let isSubscribed = true

/*
    let student = {};

    4. A variável student acima é de que tipo? R: Object | console.log(typeof student)
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
    4.2 Mostre no console a seguinte mensagem: 
        <name> de idade <age> pesa <weight> kg.
        Atenção, substitua <name>, <age> e <weight> pelos valores de cada propriedade do objeto!
*/

let student = {

    name: "Juju",
    age: 20,
    weight: 55.6,
    isSubscribed: true

}

console.log(student.name + ' de idade ' + student.age + ' pesa ' + student.weight + ' kg. ')

// interpolação: console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*  
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio.
*/

let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

*/

students = [
    student
]

/*
    7. Coloque no console o valor da posição zero do Array acima.
*/

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students.
*/

const nina = {

    name: "Nina",
    age: 27,
    weight: 62.1,
    isSubscribed: true

}

// para colocar na posição 1 pode ser de duas maneiras:

students = [
    student,
    nina,
]

students[1] = Nina // sendo esta não muito segura, pois é uma forma de forçar uma posição

