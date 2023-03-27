//Declarar un arreglo con elemtos
let frutas = ["manzana","pera","uvas"];

//Recorrer un arreglo
console.log(frutas[1]);

//Cambiar un elemento de un arreglo
frutas[1] = "piña";
console.log(frutas);

//Añadir un elemento de un arreglo
frutas.push("mango");
console.log(frutas);

//Eliminar un elemento de un arreglo
frutas.pop("mango");
console.log(frutas);

//Obtener la longitud de un arreglo
console.log(frutas.length);

//Preguntar si es un array
console.log(typeof frutas);
console.log(Array.isArray(frutas));
//Tambien
console.log(frutas instanceof Array);