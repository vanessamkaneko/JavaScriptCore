/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C 

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/


/*let notas = 50 - este valor que irá sempre mudar p/ printar os diferentes caminhos
let notaA = notas >= 90 && notas <= 100
let notaB = notas >= 80 && notas <= 89
let notaC = notas >= 70 && notas <= 79
let notaD = notas >= 60 && notas <= 69
let notaF = notas < 60 && notas >= 0

let notaFinal;

if(notaA) {
    notaFinal = "A"

} else if(notaB) {
    notaFinal = "B"

} else if(notaC) {
    notaFinal = "C"

} else if(notaD) {
    notaFinal = "D"

} else if(notaF) {
    notaFinal = "F"
} else {
    notaFinal = "Nota inválida"
}*/

// posso colocar tudo isso em uma função


function getScore(notas) {

    let notaA = notas >= 90 && notas <= 100
    let notaB = notas >= 80 && notas <= 89
    let notaC = notas >= 70 && notas <= 79
    let notaD = notas >= 60 && notas <= 69
    let notaF = notas < 60 && notas >= 0
    
    let notaFinal;
    
    if(notaA) {
        notaFinal = "A"
    
    } else if(notaB) {
        cnotaFinal = "B"
    
    } else if(notaC) {
        notaFinal = "C"
    
    } else if(notaD) {
        notaFinal = "D"

    } else if(notaF) {
        notaFinal = "F"
    } else {
        notaFinal = "Nota inválida"
    }

    return notaFinal

}

console.log(getScore(100))
console.log(getScore(21))
