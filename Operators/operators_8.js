/*
    FALSY: quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)
*/

condition ? value1 : value2
console.log(    ? 'verdadeiro' : 'falso')
//           /\ este primeiro operador é considerado falso nas seguintes condições: quando é false, 0, -0, "", null, undefined, NaN

/*
    TRUTHY: quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)
*/

console.log(    ? 'verdadeiro' : 'falso')
//           /\ este primeiro operador é considerado verdadeiro nas seguintes condições: quando é true, {}, [], 1, 3.23, "0", "false", -1, Infinity, -Infinity