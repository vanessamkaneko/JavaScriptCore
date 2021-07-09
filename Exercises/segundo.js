// Sistema de gasto familiar

/* 
    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: []
        * despesas: []

    Agora crie uma função que irá calcular o total de receitas (incomes) e despesas (expenses) e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

*/

const family = {
    receitas: [1230, 3400, 4569],
    despesas: [300, 150, 1000, 400, 230]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateReceitas = sum(family.receitas)
    const calculateDespesas = sum(family.despesas)

    const total = calculateReceitas - calculateDespesas

    const itsOk = total >= 0

    let balanceText = "negativo"

    if(itsOk) {
        balanceText = "positivo"
    }


    console.log(`Seu saldo é ${balanceText}: ${total} reais.`)
    // no ${total} poderia ser colocado um ${total.toFixed(2)} caso ficassem muitos números após a vírgula (como nenhum número era quebrado, não precisou)
}

calculateBalance()

// por debaixo dos panos:

/* const family = {
    receitas: [1230, 3400, 4569],
    despesas: [300, 150, 1000, 400, 230]

}

function sum([1230, 3400, 4569]) {
    let total = 0;

    for(let value of [1230, 3400, 4569]) {
        total += value
        total = total + value
        total = 0 + 1230 (primeiro loop - pega a posição 0 do array)    
        total = 1230 + 3400 (segundo loop - pega a posição 1)
        total = 4630 + 4569 (terceiro loop - pega a posição 2)
        total = 9.199

    }

      -  A função sum é chamada e agora tem como parâmetro os arrays (que são propriedades do objeto da variável family); o uso do for é para que ocorram os loops - no primeiro é adicionado o 1230 ao total, depois 3400 e depois 4589. A mesma coisa ocorre com as despesas.
      -  Depois de feito os cálculos, os totais obtidos são retornados e depois são aplicados no const total = calculateReceitas - calculateDespesas
      
      

    return total
}

function calculateBalance() {
    const calculateReceitas = sum(family.receitas)
    const calculateDespesas = sum(family.despesas) */