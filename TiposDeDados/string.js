// Tipos de dados

/* String

- Para se escrever uma cadeia de caracteres...
- Posso usar aspas duplas ("), aspas simples (') ou template literal/string (`)
- Quando usar cada uma delas?
    Vou usar as aspas duplas quando no texto eu precisar usar as simples 
    Vou usar as aspas simples quando no texto eu precisar usas as duplas

         Exemplo:
*/

console.log("'Olá' significa 'Hi'")
console.log('"Olá" significa "Hi"')

// Então, para usar aspas simples e duplas no texto, uso as crases `. Exemplo:

console.log(`"BIG" é o nome 'dele'`)

// Além disso, a crase permite se fazer multi linhas. Exemplo:

console.log(`Era uma vez...

Uma história.

`)

// A crase também permite colocar expressões de linguagem, como contas, que no DevTools aparecerá o resultado. Exemplo:

console.log(1 + 1)
console.log(`junto ${1+3}`)
console.log(`separadotambemda ${1 + 3}`)

// Colocar expressão dentro de uma string chama-se interpolação.