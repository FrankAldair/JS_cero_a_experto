//Las funciones de tipo "self-invoking" o "autoinvocadas" en JavaScript son funciones que se ejecutan automáticamente tan pronto como se definen, sin necesidad de llamarlas manualmente.
(function(){
    console.log("ejecutando la fnucion");
})();

(function (a,b){
    console.log("Ejecutando la funcion: "+ (a+b));
})(1,5);


// (function() {
//     var contador = 0;
    
//     function incrementarContador() {
//       contador++;
//       console.log(contador);
//     }
    
//     incrementarContador(); // 1
//     incrementarContador(); // 2
//   })();
