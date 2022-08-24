"use strict";
// Estructura de una funcion anomina autoejecutada
(() => {
    // Infiere que el tipo de dato es string
    let myProductName = 'Product 1';
    // Se da el tipo de dato
    let myProductName2 = 'Product 2';
    let myProductPrice = 123;
    /* Al momento de intentar cambiar el tipo
      de dato nos generara error
  
    myProductName = 123;
  
    */
    // Par esto es mejor tratarlo con el tipo de dato que es
    myProductName = 'Cambio en valor, con mismo tipo de dato';
    /* Tambien Al asignar un tipo de dato a una variable, se
    obtienen una ayuda por parte del editor de codigo, ya que
    si deseamos usar una funcion, nos "autocompleta" con funciones
    para el tipo de dato que se tiene
    */
    myProductName.toLowerCase();
    myProductPrice.toFixed();
    /* Al momento de generar una constante, esta reflejara
      el valor, mas no un tipo de dato, da el valor */
    const myPrdoctStock = 1000;
})();
