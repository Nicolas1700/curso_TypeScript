"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Cuando error al llamar de esta forma a una
libreria, significa un gran soporte de esta
libreria en TypeScript
*/
const date_fns_1 = require("date-fns");
// 0 => enero, 11 => diciembre
const date = new Date(2022, 5, 17);
console.log(date);
const rta = (0, date_fns_1.subDays)(date, 1);
console.log(rta);
const str = (0, date_fns_1.format)(rta, 'yyyy/dd/MM');
console.log(`La fecha menos los dias, es: ${str}`);
const lessYears = (0, date_fns_1.subYears)(date, 19);
const yearsEnds = (0, date_fns_1.format)(lessYears, 'yyyy/dd/MM');
console.log(`Al quitar los años son: ${yearsEnds}`);
