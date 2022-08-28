"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Esta es la forma de usarlo desde la
documentacion, asi que lo transformamos a
una forma que sea legible para TypeScript */
// var _ = require('lodash');
// Forma legible para TypeScript
const lodash_1 = __importDefault(require("lodash"));
const data = [
    {
        username: 'Nicolas',
        role: 'admin'
    },
    {
        username: 'Pedro',
        role: 'seller'
    },
    {
        username: 'Laura',
        role: 'seller'
    },
    {
        username: 'Luis',
        role: 'customer'
    },
];
// Esta funcion nos permite agrupar por lo que le indiquemos
const rta = lodash_1.default.groupBy(data, (item) => item.role);
console.log(rta);
