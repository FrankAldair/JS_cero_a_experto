//isNaN(Not a Number):Devuelve true si el valor no es un numero; si el valor es un numero devuelve false
isNaN("string");    //Devuelve true
isNaN(123); //Devuelve false

//Ejemplo:
let miNumero = "18x";

let edad = Number(miNumero);
console.log(edad);
if(isNaN(edad)){
    console.log("No es un numero");
}else{
    if(edad >= 18){
        console.log("Es mayor de edad, puede votar");
    }
    else{
        console.log("Es menor de edad, no puede votar");
    }
}

if(isNaN(edad)){
    console.log("No es un numero");
}else{
    let resultado = (edad >= 18)? console.log("Eres mayor de edad") : console.log("Eres menor de edad");
}