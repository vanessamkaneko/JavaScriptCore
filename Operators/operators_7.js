// Operador de string (String operator)

// comparison (comparação)
console.log('a' == 'b')

// concatenation (concatenação) - retorna a união de duas strings
let alpha = 'alpha'
console.log(alpha + 'bet') 

let alpha = 'alpha'
console.log(alpha += 'bet') 

let alpha = 'alpha'
alpha += 'bet'         // este é bom para atualizar uma string
console.log(alpha) 

// todas as formas acima imprimer alphabet

// * O JS sempre que perceber que de um lado tem uma string e ser inserido o sinal de +, mesmo que coloque um número, vai ocorrer concatenação. EX:

let alpha = 'alpha'
console.log(alpha + 220) // imprime "alpha220"

