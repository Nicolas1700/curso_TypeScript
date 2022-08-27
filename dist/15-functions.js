"use strict";
(() => {
    /* Indicamos que el array va a tener la estructura
    los tipos de datos del type product */
    const prodcts = [];
    const addProducts = (data) => {
        prodcts.push(data);
    };
    // Agregamos 1 producto
    addProducts({
        title: 'product 1',
        createAt: new Date(),
        stock: 12,
    });
    // Agregamos 2 producto
    addProducts({
        title: 'product 2',
        createAt: new Date(),
        stock: 22,
        size: 'L'
    });
    // Agregamos 3 producto
    addProducts({
        title: 'product 3',
        createAt: new Date(),
        stock: 44,
        size: 'XL'
    });
    console.log(prodcts);
})();
