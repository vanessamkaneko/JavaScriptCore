/*
    Variável: nome simbólico para receber algum valor... "Dar um apelido a algo para que fique mais fácil chamar este "algo" posteriormente." 
    
    No exemplo abaixo utilizando o VAR, o valor seria uma string (representada pelo Quente). 
        - Houve a declaração de uma variável (representado pelo var clima, no caso | em outros seria: let clima, const clima), na qual a variável declarada recebeu o valor "Quente"
        - Na linha 9 houve a reatribição do valor para a variável clima;
*/

    var clima = "Quente"
    clima = "Frio"

    console.log(clima)

/*
    O LET funciona da mesma forma que o VAR!? (na vdd o var faz o hoisting, atua em escopo global e local, o let só em local e não faz o hoisting)
*/

/*
    O CONST não pode mudar seu valor durante a aplicação... Apesar de estar no grupo de variáveis, a CONST é constante, não muda! No caso abaixo daria um erro...
*/

    const clima = "Quente"
    clima = "Frio"


    //Algumas linguagens de programação eu preciso tipar a variável antes de criá-la ou até mesmo para colocar o valor. Se fosse colocado um valor diferente do que foi especificado, daria erro. Além disso, numa linguagem estática, uma variável String seria pra sempre String. Exemplo em uma linguagem fortemente tipada (QUE NÃO É O CASO DO JavaScript):

        
            let clima:String = false // tipada como String e o valor é boolean = erro




    // No JavaScript, o tipo só existe a partir do momento que eu inserir um valor, as variáveis não precisam ter um tipo previamente definido.



    let clima = ""

    console.log(typeof clima) // o typeof serve para ver o tipo da variável.


   // O fato de eu poder alterar o valor da variável torna a linguagem dinâmica.


    
    let clima = true // aqui é boolean
    clima = "" // aqui mudou para string
