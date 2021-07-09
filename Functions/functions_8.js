/*
    Function () constructor 
    
    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person() {}
const vanessa = new Person() // ao usar o new seguido da função, esta função se torna uma função construtora, retornando para a constante um objeto (criando um novo objeto)
console.log(vanessa) // isto iria retornar um objeto, Person {}, sem propriedade nenhuma

// --------------------------------------------------------------------------------------

function Person() {
    this                // este this irá sempre se referenciar ao vanessa lá de fora, e o vanessa irá ser referenciado aqui dentro como this

}
const vanessa = new Person() 
console.log(vanessa)

// --------------------------------------------------------------------------------------

function Person(name) {
    this.name = name   
}
const vanessa = new Person("Vanessa")   // isto é como se fosse um molde para criar vários objetos  
const alexandre = new Person("Alexandre")
console.log(vanessa) // agora a vanessa tem uma propriedade chamada name
console.log(alexandre)

// --------------------------------------------------------------------------------------

function Person(name) {
    this.name = name   
    this.walk = function() {
        return "andando"
    }
}
const vanessa = new Person("Vanessa")  
const alexandre = new Person("Alexandre")
console.log(vanessa.walk()) 
console.log(alexandre.walk())

// Vanessa e Alexandre por estarem utilizando uma mesma função construtora, precisam ter os mesmos atributos e funcionalidades

// --------------------------------------------------------------------------------------

function Person(name) {
    this.name = name   
    this.walk = function() {
        return this.name + "está andando"
    }
}
const vanessa = new Person("Vanessa")  
const alexandre = new Person("Alexandre")
console.log(vanessa.walk()) 
console.log(alexandre.walk())

// resumindo: o new usado na frente da função irá nos retornar um objeto, sendo que este objeto pode ir sendo moldado utilizando o this