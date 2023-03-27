//Funciones
/*Una funcion es un bloque de codigo que se puede llamar en cualquier momento y se pueden utilizar para una tarea especifica.
Una funcion se define con la palabra clave "function" seguida del nombre de la funcion, un conjunto de parentesis y luego un conjunto de llaves que contiene el codigo que se ejecutara cuando se llame a la funcion
Los argumentos son opcionales, puede o no tener argumento una funcion*/
/*function nombrefuncion (argumento de la funcion){
    codigo a ejecutar
}*/

//Declaracion de la funcion
function miFuncion(a,b){
    console.log(a + b);
}

//Llamamos a la funcion y la ejecutamos
miFuncion();

//Llamamos a la funcion con valores
miFuncion(3,5);

//Otro ejemplo
function saludo (nombre){
    console.log("Hola, " + nombre + "!")
}
saludo("Juan");

//hoisting: Permite que una variable o función se utilice antes de que se haya declarado formalmente en el código, por ejemplo:
saludar();
function saludar(){
    console.log("Hola mundo")
}