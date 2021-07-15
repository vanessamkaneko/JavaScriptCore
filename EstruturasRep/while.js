// While - faz sentido usar quando não sabemos quando é o momento da parada

let i = 19284002408.3928

while(i > 10) {
    console.log(i)

    i /= 40
}

// a partir do valor do let i, foi dividido todos os números possíveis por 40, até o momento que não deu mais e parou

// ----------------------------

const listaDeDestinos = [
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
]

const destino = "São Paulo"

let contador = 0; // referente à posição de um dos destinos da lista
let destinoExiste = false

while (contador < 3) {
    if(listaDeDestinos[contador] === destino) {
        destinoExiste = true
        break
    }

    contador += 1
}

console.log("Destino existe: ", destinoExiste) // Uma vez que o laço estiver terminado ou que a condição for executada, iremos executar um console.log() que nos declarará se o destino existe ou não.

// if = a posição que o contador está apontando dentro da listaDeDestinos refere-se à posição correspondente ao destino?

// primeiro loop inicia com 0, depois passa pra 1, depois 2... 

// o break tem a função de parar a leitura do código assim que a condicional for verdadeira

// variável destinoExiste = false - seu valor será alterado se o destino existir, então passará a true