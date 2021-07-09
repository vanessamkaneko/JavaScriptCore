
// let é local e só funciona no escopo de criação


// let y = X *

{

    // se o console.log fosse colocado aqui, antes de declarar a variável e atribuir um valor não daria certo, pois diferente do var, não ocorre o hoisting

    let y = 0
    console.log('> existe y', y)
}

    // caso fosse colocado aqui fora um console.log('> existe y depois do bloco? ', y), isto daria erro pois o valor de y só está no escopo local e é restrito a ele. Agora se fosse criado um let y = X fora do escopo, aí sim este valor X iria aparecer.*




    let y = 1

    {
        y = 0
        y = 12 // eu poderia redefinir o valor, sendo que iria imprimir o 12 agora.
        console.log('> existe y', y)
    }

    console.log('> existe y depois do bloco? ', y)


/*
    Caso não haja um let especificado, o 'let y' será procurado em algum lugar, no caso no escopo anterior (irá subir um escopo até encontrar... caso seja necessário subir 10 escopos, assim o fará). Neste exemplo, subiu um escopo e encontrou o y = 0, sendo atualizado este valor.
*/

/*
    O const também é local e só funciona no escopo de criação. A situação citada logo acima não funciona com o const. Porém, quando em escopos diferentes e com o const especificado, os valores podem ser diferentes. Exemplo:
*/


    const z = 2

    {
        const z = 0
        // const z = 2 - aqui eu não poderia reatribuir o valor pois se trata de uma const = valor constante!
        console.log('> existe z', z)
    }

    console.log('> existe z depois do bloco? ', z)


/*
    {

        const a = {nome: "Ilda"}
        a.nome = "Ika"              // neste caso, o const pôde ser alterado através de acessar a propriedade 'nome' ???? N SEI SE TA CERTO
        console.log(' há nome feminino?', a)
    }
*/