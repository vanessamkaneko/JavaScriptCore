// Throw, Try....Catch - vamos tentar executar um bloco de códigos (Try), se der algum erro será disparado (Throw) o erro, então posso capturar (Catch) este erro na minha aplicação;

//Throw

function sayMyName(name = '') {
    if (name === '') {
        throw ('Nome é necessário')
    }
}

try {
    sayMyName()

} catch(e) {
    console.log(e)
}

// caso eu fizesse um Throw sem utilizar o Try e o Catch, a aplicação simplesmente iria parar no throw, interrompendo completamente o fluxo da aplicação após o erro. Agora se feito como acima, a execução da aplicação continua, não é interrompida...