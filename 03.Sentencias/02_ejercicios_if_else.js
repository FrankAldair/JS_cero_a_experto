//Ejrecicio estacion del año
let mes = 4;
let estacion;
if(mes == 1 || mes == 2 || mes == 12){
    estacion = "Verano";
}else if(mes == 3 || mes == 4 || mes == 5){
    estacion = "Otoño";
}else if(mes == 6 || mes == 7 || mes == 8){
    estacion = "Invierno";
}else if(mes == 9 || mes == 10 || mes ==11){
    estacion == "Primavera";
}else{
    estacion = "Valor incorrecto";
}
console.log(estacion)

//Ejercicio hora del día
/*
 6am - 11am: Buenos días
12pm - 18pm: Buenas tardes
19pm - 24pm: Buenas noches
 0am -  6am: Durmiendo
*/
let hora = 6;
let saludo;
if(hora>=6 && hora<=11){
    saludo = "Buenos días"
}else if(hora>=12 && hora<=18){
    saludo = "Buneas tardes"
}else if(hora>=19 && hora<=24){
    saludo = "Buenas noches"
}else if(hora>=0 && hora<6){
    saludo = "Durmiendo"
}else{
    saludo = "Hora incorrecta"
}
console.log(saludo)