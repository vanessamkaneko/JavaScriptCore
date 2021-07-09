// Operator precedence - precedência de operador 

/* Em ordem de relevância em um expressão:
    - grouping: ( )
    - negação e incremento: ! ++ --
    - multiplicação e divisão: * /
    - adição e subtração: + -
    - relacional: < <= > >=c
    - igualdade: == != === !==
    - AND: &&
    - OR: ||
    - condicional: ?:
    - assignment (atribuição): = += -= *=
*/

console.log( (2 + 5) * 2 ) // fará primeiro o que está dentro do parênteses

console.log (3 > 2 > 1) // vai imprimir false, pois 3 > 2 é true, e true não é > que 1 - o JS não entende como sendo 3 > 2 e 2 > 1, ele vai por partes, dizendo se é true ou false

// OBS: o true é transformado em 1 e o false é transformado em 0

console.log (3 > 2 && 2 > 1) // neste caso o 3 > 2 é transformado em true, 2 > 1 é transformado em true e aí há a comparação - true && true é igual a true