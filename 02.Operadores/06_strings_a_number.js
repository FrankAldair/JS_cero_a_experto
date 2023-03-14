let miNumero = "10";    //La variable numero la creamos como string
console.log(typeof miNumero)
let edad = Number(miNumero);    //De esta forma convertimos el valor de string a number
console.log(typeof edad);
//Creamos una condicional con la nueva variable que creamos como number
if(edad>18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}
//Simplificamos esta condicional con un operador ternario
let resultado = (edad>18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(resultado);