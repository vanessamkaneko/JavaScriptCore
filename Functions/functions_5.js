// function hoisting

sayMyName(); //executar função

function sayMyName() {
    console.log('Vanessa') // criar função
}

// uma função criada desta maneira automaticamente sofre o hoisting, então é como se a função fosse colocada no topo do código, sendo executada primeiro.

//  ------------------------------------------------------------------------------------

sayMyName(); 

const sayMyName = function() {
    console.log('Vanessa')
}

// ao utilizar um variável, por exemplo o const, não ocorre o hoisting e dá erro (não dá para acessar o sayMyName antes de ser declarado)... Mas e com o var? Teoricamente sofreria hoisting e daria pra executar, mas não é isso que ocorre, ocorre como abaixo:

sayMyName(); 

var sayMyName = function() { // inicialmente assim
    console.log('Vanessa')
}

var sayMyName    // por baixo dos panos ocorreria isso, e se tornaria uma variável undefined

sayMyName();     // executa esta linha, mas dá que não é uma função, sayMyName é undefined

const sayMyName = function() {
    console.log('Vanessa')
}

// portanto, ao fazer uma função de uma maneira de expressão, não ocorre o hoisting (tanto com var, let ou const)

