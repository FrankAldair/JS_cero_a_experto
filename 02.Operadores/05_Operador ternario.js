//Operador ternario("?"): Es una forma abreviada de escribr la declaracion if-else en una sola linea de codigo.
/*El operador ternario cuenta de tres partes:
Una expresion booleana.
Una expresion. que evalua si la conicion booleana es verdadera
Una expresion. que evalua si la condicion booleana es falsa*/
//condicion ? expresion1 : expresion2
//Donde "condicion" es una expresion booleana que se evaualara a verdadera o falsa y "expresion1" es la expresion que evalua si la condicion es verdadera y "expresion2" es la expresion que se evalua si la condicion es falsa
//EJEMPLO 1
//Estructura if-else
x = 10;
if (x>10){
    y="mayor que 10";
}else{
    y="menor o igual que 10";
}
console.log(y);
//Sontaxis operador ternario
b = 10;
a = (b>10) ? "Es mayor que 10" : "Es menor que 10";
console.log(a);

//EJEMPLO 2
let resultado = (3>2) ? "Verdadero" : "Falso";
console.log(resultado);

//EJEMPLO 3
let numero = 9;
resultado = (numero%2 == 0) ? "El numero es par" : "El numero es impar";
console.log(resultado);
