// For...of - declaração que cria um loop a partir de uma variável que já tivermos previamente (pode ser string, array...)

let name = 'Vanessa'

for(let char of name) {
    console.log(char)
}

// no primeiro loop pega o V, no segundo o A, no terceiro o N e assim sucessivamente até ser pego todos os caracteres... Resumindo: pega o caracter, joga na variável (de nome char) e imprime na tela

let fruits = ['Banana', 'Uva', 'Caqui', 'Pera']

for(let all of fruits) {
    console.log(fruits)
}

// assim a cada loop irá mostrar os elementos do array