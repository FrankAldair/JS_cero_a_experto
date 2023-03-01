//Igualdad: Compara dos valores y devuelve verdadero si son iguales, aunque no sean del mismo tipo de dato
let a = 3, b = 2, c = "3";
let x = a == b; //Se revisa el valor sin importar el tipo de la variable
console.log(x);
let y = a == c; //Se revisa el valor sin importar el tipo de la variable
console.log(y);

//Igualdad estricta: Compara dos valores y devuelve verdadero solo si son iguales y del mismo tipo de dato
let z = a === c;    //Revisa los valores pero tambien el tipo de variable
console.log(z);
b = 3;      //Cambia el valor de b a 3
let w = a === b;    //a y b si cumplen
console.log(w);

//Desigualdad(Distinto a): Compara dos valores y devuelve verdadero si son diferentes; aunque sean del mismo tipo de dato
let v = a != c; //Se revisa el valor sin importar el tipo de la variable
console.log(v);
b = 2;
let u = a != b; //Se revisa el valor sin importar el tipo de la variable
console.log(u);

//Desigualdad estricta: Compara dos valores y devuelve verdadero solo si son diferentes y del mismo tipo de dato
let t = a !== c;    //Revisa los valores pero tambien el tipo de variable
console.log(t);
b = 3;
let s = a !== b;    //Revisa los valores pero tambien el tipo de variable
console.log(s);


/*Operadores realacionales*/

//Menor que(<): Compara dos valores y devuelve verdadero si el primero es menor que el segundo
b = 5;
let menorQue = a < b;
console.log(menorQue);

//Menor o igual que(<=): Compara dos valores y devuelve verdadero si el primer valor es menor o igual que el segundo
let menorIgual = a <= c;
console.log(menorIgual);

//Mayor que(>): Compara dos valores y devuelve verdadero si el primero es mayor que el segundo
let mayorQue = b > a;
console.log(mayorQue);

//Mayor o igual que(>=): Compara dos valores y devuelve verdadero si el primer valor es mayoy o igual que el segundo
let mayorIgual = a >= c;
console.log(mayorIgual);