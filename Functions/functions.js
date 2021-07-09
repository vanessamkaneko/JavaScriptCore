/*const soma = function(number1, number2, number3){
    const total = number1 + number2 + number3
    return total
}

console.log(soma(2,5,10))*/

//Função construtora

/*function Pessoa(name, sobrenome, idade) {
    this.nome = name;
    this.sobrenome = sobrenome;
    this.idade = idade;

    this.nomeCompleto = `${name} ${sobrenome}`;
    this.frase = () => {
        return `Olá, meu nome é ${this.nome} ${this.sobrenome} e eu tenho ${this.idade}`;
    }

    return this;
}

const person1 = new Pessoa('alexandre', 'kimura', 25);
const person2 = new Pessoa('Vanessa', 'Kaneko', 23);
const person3 = new Pessoa('Fulano', 'Ciclano', 30);*/

//console.log(person1);
//console.log(person2);
//console.log(person1.nome);
//console.log(person2.sobrenome);
//console.log(person1.nomeCompleto);
//console.log(person3.frase());


//Criar tres carros com nome, marca e ano
//criar uma frase com as 3 variaveis por função
//printar os 3 modelos de carro com todas as variaveis

function Carro(nome, marca, ano) {
    this.nome = nome;
    this.marca = marca;
    this.ano = ano;

    this.phrase = () => {

        return `O melhor carro é o ${this.nome}, da marca ${this.marca} do ano ${this.ano}`
    }

    this.carroCompleto = `${this.nome} ${this.marca} ${this.ano}`; 

    return this;
}

const carro1 = new Carro('Fiesta', 'Ford', 2014);
const carro2 = new Carro('HB20', 'Hyundai', 2017);
const carro3 = new Carro('Gol', 'Volkswagen', 2009);

/*console.log(carro1.carroCompleto)
console.log(carro2.carroCompleto)
console.log(carro3.carroCompleto)
console.log(carro1.phrase())
console.log(carro2)
console.log(carro3.ano)*/
let car;
for(let i = 2000; i <= 2100; i++) {
    if(i%2 === 0) {
        car = new Carro('HB20', 'Hyundai', i);
    }else {
        car = new Carro('Gol', 'Volkswagen', i);
    }
    
    console.log(car.phrase());
}

