"use strict";
(() => {
    let productPrice = 100;
    productPrice = 12;
    console.log('ProductPrice', productPrice);
    let customerAge = 28;
    //customerAge = customerAge + '1'; // 281
    customerAge = customerAge + 1;
    console.log('customerAge', customerAge);
    let productInStock;
    console.log('productInStock', productInStock);
    if (productInStock > 10) {
        console.log('Is great');
    }
    let distcount = parseInt('letras'); // => la fun rec un string y da un int
    // Al momento de revibir letras y no numero, lo convierte a NaN
    console.log('distcount', distcount);
    // inicia con 0x(hexadecimal)
    let hex = 0x0f124;
    console.log('hexadecimal: ', hex);
    // inicia con 0x(binario 0 o 1)
    let binariy = 0b00110101;
    console.log('binario: ', binariy);
    // inicia con 0x(hexadecimal)
    let octal = 0o0771234;
    console.log('Octadecimal: ', octal);
})();
