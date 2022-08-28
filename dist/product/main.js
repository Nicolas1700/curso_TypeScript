"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Se importan las funciones creadas en product.service.ts
para darles uso e imprimir resultados de sus usos*/
const product_service_1 = require("./product_service");
// Agregamos 1 producto
(0, product_service_1.addProducts)({
    title: 'product 1',
    createAt: new Date(),
    stock: 12,
});
// Agregamos 2 producto
(0, product_service_1.addProducts)({
    title: 'product 2',
    createAt: new Date(),
    stock: 22,
    size: 'L'
});
// Agregamos 3 producto
(0, product_service_1.addProducts)({
    title: 'product 3',
    createAt: new Date(),
    stock: 44,
    size: 'XL'
});
console.log(product_service_1.products);
const total = (0, product_service_1.calcStock)();
console.log(total);
