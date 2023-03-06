//Operador AND(Se representa con "&&"): Compara dos expresiones booleanas y devuelve true si ambas son verdaderas, de lo contrario devuelve true
//Ejemplo 1:
var x=5, y=10, z=15;
console.log(x<y && y<z);
console.log(x<y && y>z);
//Ejemplo 2:
let a = 5;
let valMin = 1, valMax = 8;
if(a>=valMin && a<=valMax){
    console.log("Se encuentra dentro del rango");
}else{
    console.log("Fuera del rango");
}

//Operador OR(Se representa con "||"): Devuelve verdadero si al menos una de las dos expresiones es verdadera, si ambos son falsos , devuelve falso
//Ejemplo 1:
var x=5, y=10, z=15;
console.log(x<y || y>z);
console.log(x>y || y>z);
//Ejemplo 2:
let vacaciones=false, diaDescanso=false;
if(vacaciones || diaDescanso){
    console.log("Puedes asistir al juego")
}else{
    console.log("El padre esta ocupado")
}

//Operador NO(Se representa con "!"): Devuelve el valor opuesto del operando. Si es verdadero, devuelve falso, caso contrario
//Ejemplo 1:
var x=5, y=10;
console.log(!(x<10));
console.log(!(x>10));
//Ejemplo 2:
var verdadero=true, falso=false;
console.log(!(verdadero));
console.log(!(falso));