//Las funciones son tratadas como objetos, lo que significa que las funciones pueden ser asignadas a variables, pasadas como argumentos de otras funciones, almacenadas en propiedades de objetos, y más

//Asignar la funcion a una variable
function saludar() {
    console.log("Hola");
  }
  
  var miFuncion = saludar;
  miFuncion(); // "Hola"
//En este ejemplo, la función "saludar" se asigna a la variable "miFuncion" y luego se invoca como una función normal.

//Pasar una función como argumento de otra funcion
function sumar(a, b) {
    return a + b;
  }
  
  function calcular(f, a, b) {
    return f(a, b);
  }
  
  var resultado = calcular(sumar, 3, 4);
  console.log(resultado); // 7
//En este ejemplo, la función "sumar" se pasa como argumento a la función "calcular", que luego invoca la función "sumar" con los argumentos "3" y "4".

//Almacenar una función en una propiedad de un objeto:
var objeto = {
    nombre: "Juan",
    saludar: function() {
      console.log("Hola, mi nombre es " + this.nombre);
    }
  };
  
  objeto.saludar(); // "Hola, mi nombre es Juan"
//En este ejemplo, se crea un objeto que tiene una propiedad "nombre" y un método "saludar" que muestra un mensaje en la consola utilizando la propiedad "nombre" del objeto.