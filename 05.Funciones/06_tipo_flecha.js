//Las funciones de tipo flecha son una forma simplificada de escribir funciones; estas son una alternativa a las funciones regulares y tienen algunas diferencias clave en su sintaxis y comportamiento
//La sintaxis es la siguiente:
//(pram1, param2, ...) => {sentencias}
//Donde pram1, param2,etc. son los parametros de la funcion y "Sentencias es el cuerpo de la funcion"

//Una funcion regular:
function sumar(a,b){
    return a + b;
}

//Funcion de tipo flechas
let sumarFlecha = (a,b) => a + b;

console.log(sumar(2,3));
console.log(sumarFlecha(3,5));

//Ejemplo: