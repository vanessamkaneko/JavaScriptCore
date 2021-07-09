/* Celsius em Fahrenheit ou vice-versa

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

    C = (F - 32) * 5/9
    
    F = C * 9/5 + 32
*/

// transformDegree ('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    // aqui era só pra verificar se havia a presença de C e F e colocá-las em letra maiúscula como padrão

    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {

        throw new Error('Grau não identificado')
    }

    // fluxo escolhido como ideal, F -> C
 
    let updatedDegree = Number(degree.toUpperCase().replace("F", "")); // o que era string foi transformado em number
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo, C -> F
    if(celsiusExists) {

        updatedDegree = Number(degree.toUpperCase().replace("C", "")); 
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'
        // aqui não foi declarada a variável com o let pois senão eu estaria criando novas variáveis para este escopo, e eu quero usar as mesmas variáveis do escopo anterior, apenas fazendo alterações aqui
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('50Z'))

} catch (error) {
    console.log(error) // só com error é mostrada a mensagem Grau não identificado e em qual linha está o erro - quem dá esta possibilidade é o new Error | se fosse inserido um error.message, iria aparecer somente a mensagem Grau não identificado
}


// O número extraído da função transformDegree(degree) será atribuído para a variável let updatedDegree | no return formula(updatedDegree) este número será passado para o (fahrenheit) do let formula, ocorrendo o cálculo (fahrenheit - 32) * 5/9, que me devolverá um número, o qual será concatenado com o degreeSign

