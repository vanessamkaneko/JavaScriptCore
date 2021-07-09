// var é global (lê tudo o que está fora do escopo local e dentro) e local (lê só o que está dentro do escopo local) 

    console.log('> existe x antes do bloco? ', x)
    
    {
        var x = 0  
    }


/*
    Ao executar o código como acima, aparecerá como undefined, ou seja, diz que o valor existe mas que não está definido. Mas como? Visto que aparentemente até a linha 6 não existe o x...

    Isto ocorre porque no JS há um comportamento chamado hoisting: por baixo dos panos, a declaração da variável é elevada ao topo do código, como no exemplo abaixo:
*/


    var x 

    console.log('> existe x antes do bloco? ', x)
    
    {
    
        x = 0     
    }


// Recapitulando...



    console.log('> existe x antes do bloco? ', x) //aqui o valor dá como undefined
    
    {
        var x = 0  
    }

    console.log('> existe x antes do bloco? ', x) //aqui aparece o valor de x = 0
    

/*
    EVITAR USAR O VAR justamente por ser flexível assim e poder causar bugs inesperados! Veja que o console estando fora do escopo, que é onde há o valor de x, não impede de obter este valor. Em casos de let e const, o console obrigatoriamente deveria estar dentro do escopo.

*/