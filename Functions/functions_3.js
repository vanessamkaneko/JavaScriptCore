
const sum = function(number1, number2){
   console.log(number1 + number2)
}

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`) 

// na linha 12, o JS ainda está construindo a string, está interpolando valores, ao entrar na expressão sum(number1, number2), executa a função, encontra o console.log(number1 + number2), imprimindo o 59. Terminando de executar a função, ela 'retorna a algo', e quando não tem a palavra return, imprime um undefined, que é o que ocorre neste caso acima.

const sum = function(number1, number2){
    total = number1 + number2
    return total
}

// dentro do escopo aí de cima não há nenhum console.log, então ao executar a função sum(number1, number2), irá fazer o registro do number 1 + number 2 e colocar em total, depois acha a linha return e retorna ao que vem logo a frente, no caso, total.


let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`) 
// console.log (total) - EXEMPLO

// não foi especificado que tipo de variável é o total, se é var/const/let, com isso, se houvesse um console.log(total) na linha 30, após a função ser rodada, iria ocorrer a impressão do resultado mesmo fora do escopo da linha 16 -> justamente porque NÃO TEM NENHUM OPERADOR ESPECIFICANDO A VARIÁVEL!!!!!! NÃO FAZER ISSO!!!! 

// Pois suponhamos que crio fora do escopo uma let = 0, ao executar o programa, o resultado será 59, não 0... Isso tudo porque não houve especificação da variável!!!

// Então o correto é como abaixo:

const sum = function(number1, number2){
    const total = number1 + number2
    return total
}

const number1 = 34   // este number1 e 2 não são os mesmos ali de cima, só está com o mesmo nome
const number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`) 

// Vamos imaginar que a função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)

/* Função é um liquidificador, o qual pode receber qualquer coisa, no caso as frutas... 'Chegando lá dentro'(executando a função) vai ocorrer o processo e ele vai me retornar o resultado do processo, que vai ser recebido em algum lugar, no caso, no copo. Depois, para ver o que há no copo, vemos pelo console.log.

    - A função funciona como se fosse uma caixa mágica, onde colocamos coisas dentro e ela me retorna algo transformado */