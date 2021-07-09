// Switch

/*switch (expression) { // dentro dos () vai uma expression qualquer 
    case 'a':
        // ...... código aqui
        break
    case 'b':
        // ....... código p/ expressão b
        break
    default: // caso não cumprir nenhuma das expressões acima, é impresso na tela
        break
} */

// Exemplo:

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('Não implementado')
            break

    }

    return result 

}

console.log(calculate(4, '*', 50))

// caso eu colocasse um '%', retornaria o 'não implementado' e um undefined pois no let não foi atribuído valor