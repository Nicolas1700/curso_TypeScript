"use strict";
(() => {
    function createProductToJson(title, createAt, stock, size) {
        return {
            title,
            createAt,
            stock,
            size
        };
    }
    /*const product1 = createProductToJson('P1', new Date(), 12, 'XL');
    console.log(product1);
    console.log(product1.title);
    console.log(product1.createAt);*/
    // array-funcion
    const createProductToJsonV2 = (title, createAt, stock, 
    // Este parametro es opcional por el signo ?
    size) => {
        return {
            title,
            createAt,
            stock,
            size
        };
    };
    const product2 = createProductToJsonV2('P1', new Date(), 12);
    console.log(product2);
    console.log(product2.title);
    console.log(product2.createAt);
    console.log(product2.stock);
    console.log(product2.size);
})();
