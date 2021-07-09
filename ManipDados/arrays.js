// Manipulando arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")

// adicionar um item no começo
techs.unshift("sql")

// remover do fim
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) // primeiro argumento pra dizer qual a posição de início que eu quero - começa contando pelo 0; segundo argumento é pra dizer até qual posição que eu quero que ele vá - começa contando pelo 1 | neste caso iria printar o css e o js

// remover 1 ou mais itens de qualquer posição do array
techs.splice(1, 1)     // o primeiro argumento começa contando pelo 0, e é pra indicar qual a posição de início para a remoção (lembrando que o próprio elemento já conta); o segundo argumento é o número de elementos que quero remover | neste caso iria ser removido o css

// encontrar a posição de um elemento no array
let position = techs.indexOf('css') // contando as 5 techs, deu posição 2
techs.splice(position, 1) // também posso fazer assim p/ remover - então iria iniciar na posição 2 p/ começar a remover e removeria 1 elemento





//console.log(techs) p/ ver as alterações de todos, exceto o último, que será console.log(position)
