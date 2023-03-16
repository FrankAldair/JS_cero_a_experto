//La palabra break en JavaScript se utiliza para salir de un bucle o un interruptor(switch)
//Breack dentro de un bucle
for(i=2; i<10; i++){
    if(i===5){
        break;
    }
    console.log(i)
}
//Break dentro de un switch
var color = "rojo";
switch(color){
    case "rojo":
        console.log("Color rojo")
        break;
    case "verde":
        console.log("Color verde")
        break;
    default:
        console.log("El color no es ni rojo, ni verde")
}