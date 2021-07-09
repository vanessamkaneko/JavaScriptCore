
    // Variáveis e tipos de dados
    // declaração or declaration
    var name

    // assignment or atribuição de valores
    name = "Vane"

    // que tipo de dado foi colocado na variável?
    console.log(typeof name)

    let age = 23        // pode fazer assim ou agrupado
    let isHuman = true

    let age, isHuman // agrupamento de declarações

    age = 23
    isHuman = true

    console.log(name, age, isHuman) // a função está recebendo 3 argumentos - múltiplos argumentos na função

    // escrita de texto + variáveis:
    // concatenando valores

    console.log(' a ' + name + ' tem ' + age + ' anos. ') // as strings (entre os '') são separadas das variáveis pelo sinal de "+", dando espaço entre eles para ser mais fácil de visualizar. Dessa maneira, posso trocar o valor de name e de age que irá sempre aparecer o que quero... No caso, agora aparece "a Vane tem 23 anos.". Se eu trocasse o nome por Lili e a idade por 35, iria aparecer "a Lili tem 35 anos." e assim vai...

    // interpolando valores com template literals or template strings

    console.log(`a ${name} tem ${age} anos.`)

