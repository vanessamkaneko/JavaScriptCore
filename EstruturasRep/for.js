// For

// OBS: o i++ é crescente e o i-- decrescente | no caso se o nome da variável fosse cont (let cont = 0) ficaria: for(let cont = 0, cont < 10; cont++)
// dentro dos () - primeiro inicializa uma variável, depois coloca uma condição de continuação deste loop, então, enquanto o i < 10, continua adicionando de 1 em 1


/* for(let i = 0; i < 10; i++) {
    console.log(i)

} */

// break - para a execução do loop - então só aparece do 15 ao 11 e para, neste caso abaixo


/*for(let i = 15; i > 0; i--) {
    if (i === 10) {
        break;
    }
    console.log(i)
} */

// continue - pula apenas a informação inserida - no caso só pularia o 5

for(let i = 0; i <= 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i)
}
