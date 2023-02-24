/*Tipos de datos en java script*/
//Strings: Cadena de texto
var nombre = "Carlos";   //Creamos la variable y le asignamos el valor a dicha variable
console.log(nombre);    //Imprimimos en consola dicha variable
console.log (typeof nombre);    //Imprimimos en consola el tipo de dato con el metodo "typeof"
//Number: valor numerico
var numero = 100;
console.log(typeof numero);
 //Object: Estructura de datos flexibles que permiten almacenar y manipular informacion
 var objet = {
    nombre: "Frank",
    edad: 19,
    telefono: "987654321"
 }
 console.log(typeof objet);
//Undefined: No tiene un valor asignado
var x;
console.log(typeof x);
//Boolean: True False
var verdadero = true;
console.log (typeof verdadero);
/*//Symbol
const emojiSymbols = {
  thumbsUp: Symbol('👍'),
  heart: Symbol('❤️'),
  smiley: Symbol('😊'),
};

const message = '¡Hola! Me encantó el nuevo diseño de la aplicación 👍❤️😊';

const emojiCounts = {
  [emojiSymbols.thumbsUp]: 1,
  [emojiSymbols.heart]: 1,
  [emojiSymbols.smiley]: 1,
};

for (let char of message) {
  if (char in emojiSymbols) {
    emojiCounts[emojiSymbols[char]]++;
  }
}

console.log(emojiCounts);*/
//Function
function sumar (num1, num2){
    return num1 + num2;     //Llamando a la funcion y asignando el resultado a una variable
}
let resultado = sumar (3,5);
console.log(resultado)
