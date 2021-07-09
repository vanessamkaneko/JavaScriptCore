// If...Else - Se...Senão

/* if() {   ali dentro vai uma condicional, que se retornar true, entra no bloco de códigos
  

} else { 


} senão for true, entra neste outro bloco de códigos */

// Exemplo:

let temperature = 36.5

if(temperature >= 37) {
    console.log('Febre')
} else {
    console.log('Saudável')
}

// posso usar só o if quando for o caso de eu apensar querer alertar quando algo é true;

// pode-se também usar múltiplas condicionais para uma mesma ideia. Exemplo:

let temperature = 37.5

if(temperature >= 37.5) {
    console.log('Febre alta')
} else if (temperature < 37.5 && temperature >= 37) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

// posso também fazer como abaixo:

let temperature = 37.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

// OBS: se uma condição bater com outro, irá sempre seguir a ordem do if e do else, por exemplo, se o high e o medium fossem >= 37.5, iria entrar só no primeiro if e pronto, desconsiderando o resto das condições.