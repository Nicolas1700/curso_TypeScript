"use strict";
// Los metodos para incluir o operar los datos
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcStock = exports.addProducts = exports.products = void 0;
exports.products = [];
const addProducts = (data) => {
    exports.products.push(data);
};
exports.addProducts = addProducts;
const calcStock = () => {
    let total = 0;
    exports.products.forEach((item) => {
        total += item.stock;
    });
    return total;
};
exports.calcStock = calcStock;
