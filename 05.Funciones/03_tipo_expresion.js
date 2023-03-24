//Las funciones de tipo expresion son funciones que se expresan y asignan con una variable, en vez de declararse con la palabra "function".
//En otras palabras, una funcion de tipo expresion es una funcion que se utiliza como una expresion dentro de orta sentencia , como asignacion a una variable

//Declaracion de la funcion
function miFuncion(a,b){
    return a + b;
}

//Llamando a la funcion
let resultado = miFuncion(2,3);
console.log(resultado);

//Declaracion funcion tipo expresion
let x = function(a,b){return a + b};

resultado = x(1,2);
console.log(resultado);