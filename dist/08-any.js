"use strict";
(() => {
    let myDynmicVar;
    myDynmicVar = 100;
    myDynmicVar = null;
    myDynmicVar = {};
    myDynmicVar = '';
    /* Se suele usar en proyectos donde apenas
    se esta aprendiendo TypeScript, para acostumbrarse
    al tipado */
    // Convertir a string el any
    myDynmicVar = 'Hola';
    /* Castin (forma #1) */
    const rta = myDynmicVar.toLowerCase();
    console.log(rta);
    // Converir a numero el any
    myDynmicVar = 12123;
    /* Castin (forma #2) */
    const rta2 = myDynmicVar.toFixed();
    console.log(rta2);
});
