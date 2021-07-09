// callback function

function sayMyName(name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a função callback')

}

sayMyName(  // podendo colocar aqui qualquer tipo de dado: string, object, number, funções..
    () => {
        console.log('estou em uma callback')
    }
    
) 

// a função é criada fora do escopo, sendo colocado apenas o parâmetro lá dentro; quando o parâmetro é executado, é como se a função fosse chamada lá para dentro...


function sayMyName(name,name2,tres) {
    console.log('antes de executar a função callback')

    name()

    name2()

    tres()
    
    console.log('depois de executar a função callback')

}

sayMyName(  // podendo colocar aqui qualquer tipo de dado: string, object, number, funções..
    () => {
        console.log('estou em uma callback')
    },
    () => {
        console.log('Estou em outra callback')
    },
    () => {
        console.log('Mais um callback')
    }
) 