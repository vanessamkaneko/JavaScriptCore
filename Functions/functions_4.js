// function scope

let subject

function createThink(subject) {
    return subject
}

console.log(createThink(subject)) // ao executar esta função, será retornado um undefined, pois a variável let subject só foi declarada e não recebeu nenhum valor

// --------------------------------------------------------------------

let subject = 'create video'

function createThink(subject) {
    return subject
}

console.log(subject)
console.log(createThink(subject)) // ao executar esta função, será retornado para ambas as linhas o create video

// --------------------------------------------------------------------

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject)) // ao executar esta função, será retornado primeiro o create video e depois o study

// --------------------------------------------------------------------

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject)) // ao executar esta função, será apenas invertido: primeiro study e depois o create video
console.log(subject) 

// --------------------------------------------------------------------

let subject = 'create video'

function createThink() {
    subject = 'study'
    return subject
}

console.log(createThink(subject)) // ESSE SUBJECT PEGA O DE DENTRO OU DE FORA?

console.log(subject)  // como agora no createThink não tem parâmetro, e dentro do escopo o subject mudou para study (sem estar declarando uma variável), ao executar a função, as duas retornam como study, pois a alteração feita no escopo local irá para o escopo global (assim o let subject = 'create video' no escopo global é desconsiderado e é substituído pelo study).

// Portanto, o primeiro console irá buscar o subject do escopo anterior (que agora é o study) e o segundo console por já estar no escopo global também pega o subject do global (= study)!

// --------------------------------------------------------------------

let subject 

function createThink() {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink()) 
console.log(subject) // ao ser executado assim, será retornado undefined, study e study -> undefined para o primeiro pois let subject não tem valor atribuído, segundo o study pois há o retorno (return) da função, sendo o subject study, e terceiro study de novo pois como o createThink não tem parâmetro, o subject = study do escopo local irá para o global também, atualizando o 'let subject'.

//  --------------------------------------------------------------------

let subject 

function createThink() {
    subject = 'study' // aqui só estou atualizando a variável do escopo anterior
}

console.log(subject)
console.log(createThink()) 
console.log(subject) // ao executar assim, seria retornado undefined, depois undefined de novo (pois agora não há nenhum retorno - o pensamento foi criado mas não houve para onde retornar) e o terceiro retornaria study após ser criado o pensamento 

