let numero = 3;
let numeroTexo = "Valor desconocido";
switch(numero){
    case 1:
        numeroTexo = 'Numero uno';
    break;
    case 2:
        numeroTexo = 'Numero dos';
    break;
    case 3:
        numeroTexo = 'Numero tres';
    break;
    case 4:
        numeroTexo = 'Numero cuatro';
    break;
    default:
        numeroTexo = 'CASO NO ENCONTRADO'
}
console.log(numeroTexo)