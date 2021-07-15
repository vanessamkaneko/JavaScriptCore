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

console.log("Destino existe: ", destinoExiste)

