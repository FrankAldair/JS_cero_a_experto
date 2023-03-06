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

//Function
function myfunction(){}
console.log(typeof myfunction);

//Tipo de clase es una funcion: Los tipos de clase son conciderados como funciones
class persona{
  constructor(nombre, apellido){
    this.nombre = Frank;
    this.apellido = Agurto;
    }
  }
console.log(typeof persona);

//Array
var autos = ['BMW','Audi','Volvo']
console.log(typeof autos);

//empty string : un dato vacio
var z = '';
console.log(z);
console.log(typeof z)