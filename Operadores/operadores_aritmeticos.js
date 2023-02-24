//Suma '+'
let a = 3, b=5;
let x = a + b;
console.log("Resultado de la suma: " + x);

//Resta '-'
let y = b - a;
console.log("Resultado de la resta: " + y);

//Multiplicacion '*'
let z = a * b;
console.log("Resultado de la multiplicacion: " + z);

//Division '/'
let division = b / a;
console.log ( "La division es: " + division );

//Exponente '**'
let exponentacion = b ** a;
console.log ( "El resultado de la operacion exponente es: " + exponentacion );

//Residuo de la division '%'
let resto = b % a;
console.log ( "El residuo de la divicion es: " + resto );


/*Operaciones de Incremento y Decremento*/

//Incremento '++'
//Preincremento (El operador ++ antes de la variable)
let incremento = ++a;
console.log (a);
console.log("El incremento de a es: " + incremento);
//Post-incremento (El operador ++ despues de la variable)
let postIncremento = b++;
console.log(b),
console.log("El post incremento de b es: " + postIncremento);

//Decremento '--'
//Predecremento(El operador -- antes de la variable)
let decremento = --a;
console.log(a);
console.log("El decremento de b es: " + decremento);
//Post-decremento (El operador -- despues de la variable)
let postDecremento = b--;
console.log(b);
console.log("El post decremento de b es: " + postDecremento);
