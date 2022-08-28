/* Cuando error al llamar de esta forma a una
libreria, significa un gran soporte de esta
libreria en TypeScript
*/
import { subDays, subYears, format } from 'date-fns';

// 0 => enero, 11 => diciembre
const date = new Date(2022, 5, 17);
console.log(date);

const rta = subDays(date,1);
console.log(rta);

const str = format(rta,'yyyy/dd/MM');

console.log(`La fecha menos los dias, es: ${str}`);

const lessYears = subYears(date,19);
const yearsEnds = format(lessYears,'yyyy/dd/MM');

console.log(`Al quitar los años son: ${yearsEnds}`);


