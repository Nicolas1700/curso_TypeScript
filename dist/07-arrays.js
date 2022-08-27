"use strict";
(() => {
    // Es un array de numeros, no permite otros tipo de datos
    const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    /* Es un array de varios tipos de datos, admite
    strings, numeros y booleanos*/
    const valoresDiferentes = ['string', 0, 1, false];
    let products = ['hola', true];
    products.push(false);
    console.log(products);
    /* Para recibir varios tipos de datos, se tiene que pasar
    de forma inferida los tipos de datos a recibir */
    let mixed = ['hola', true];
    mixed.push(12);
    mixed.push('as');
    mixed.push(false);
    mixed.push({});
    mixed.push([]);
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    /* Aunque se pueden usar metodos de arrays con numeros
    si dentro de este se utilizan solo numeros, ejemplo: */
    let numbersPorItem = numbers.map(item => item * 2);
    console.log(numbersPorItem);
})();
